import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

// ISO 20022 text, identifier, code and amount types (Max35Text, Max15NumericText,
// ActiveCurrencyAndAmount_SimpleType, ...) are `type: string` in the v2.0 ISO 20022 spec.
// Their examples must be strings too: implementers copy examples, client generators and
// validators read them, and a payee that binds strictly rejects `"NbOfTxs": 1` or
// `"MsgId": 12345`. See https://github.com/mojaloop/api-snippets/issues/251
const specFile = path.join(__dirname, '../../docs/fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml')
const spec: any = yaml.load(fs.readFileSync(specFile, 'utf8'))

type Info = { types: Set<string>; props: Map<string, any>; items?: any; branches: Info[] }

const deref = (schema: any): any => {
  let guard = 0
  while (schema && schema.$ref && guard++ < 50) {
    schema = schema.$ref
      .replace(/^#\//, '')
      .split('/')
      .reduce((node: any, part: string) => node[part], spec)
  }
  return schema
}

// Merge a schema with everything reachable through $ref and allOf; keep oneOf/anyOf as branches.
const collect = (schema: any, depth = 0): Info => {
  const info: Info = { types: new Set(), props: new Map(), branches: [] }
  const s = deref(schema)
  if (!s || typeof s !== 'object' || depth > 30) return info
  if (s.type) info.types.add(s.type)
  Object.entries(s.properties || {}).forEach(([k, v]) => info.props.set(k, v))
  if (s.items) info.items = s.items
  for (const sub of s.allOf || []) {
    const c = collect(sub, depth + 1)
    c.types.forEach((t) => info.types.add(t))
    c.props.forEach((v, k) => info.props.has(k) || info.props.set(k, v))
    info.items = info.items || c.items
    info.branches.push(...c.branches)
  }
  for (const sub of [...(s.oneOf || []), ...(s.anyOf || [])]) info.branches.push(collect(sub, depth + 1))
  return info
}

// Must a scalar at this position be a string? Arrays are judged by their item type.
const isString = (info: Info, depth = 0): boolean => {
  if (depth > 30) return false
  if (info.types.has('array') && info.items) return isString(collect(info.items), depth + 1)
  if (info.types.size) return info.types.size === 1 && info.types.has('string')
  return info.branches.length > 0 && info.branches.every((b) => isString(b, depth + 1))
}

const checkValue = (schema: any, value: unknown, where: string, out: string[]): void => {
  const info = collect(schema)
  if (Array.isArray(value)) {
    if (info.items) value.forEach((v, i) => checkValue(info.items, v, `${where}[${i}]`, out))
    return
  }
  if (value !== null && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      const prop = info.props.get(k) ?? info.branches.find((b) => b.props.has(k))?.props.get(k)
      if (prop) checkValue(prop, v, `${where}.${k}`, out)
    }
    return
  }
  if (value !== null && typeof value !== 'string' && isString(info)) out.push(`${where} = ${JSON.stringify(value)}`)
}

const walkSchema = (schema: any, where: string, out: string[]): void => {
  if (!schema || typeof schema !== 'object') return
  if ('example' in schema) checkValue(schema, schema.example, `${where}.example`, out)
  Object.entries(schema.properties || {}).forEach(([k, v]) => walkSchema(v, `${where}.properties.${k}`, out))
  if (schema.items) walkSchema(schema.items, `${where}.items`, out)
  for (const key of ['allOf', 'oneOf', 'anyOf']) {
    ;(schema[key] || []).forEach((v: any, i: number) => walkSchema(v, `${where}.${key}[${i}]`, out))
  }
}

// Every `example` / `examples` value anywhere in the document, wherever it sits.
const collectExamples = (node: any, where: string, out: Array<[string, unknown]>): void => {
  if (!node || typeof node !== 'object') return
  for (const [k, v] of Object.entries(node)) {
    if (k === 'example' || k === 'examples') out.push([`${where}.${k}`, v])
    else collectExamples(v, `${where}.${k}`, out)
  }
}

const numbersIn = (value: unknown, where: string, out: string[]): void => {
  if (typeof value === 'number') out.push(`${where} = ${value}`)
  else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([k, v]) => numbersIn(v, `${where}.${k}`, out))
  }
}

describe('v2_0_ISO20022 OpenAPI examples', () => {
  it('uses string examples for every string-typed schema (through $ref, allOf, oneOf and nested objects)', () => {
    const problems: string[] = []
    Object.entries(spec.components.schemas).forEach(([name, schema]) =>
      walkSchema(schema, `components.schemas.${name}`, problems)
    )
    expect(problems).toEqual([])
  })

  it('has no JSON number literals in any example', () => {
    // The only numeric types in this document are the Content-Length headers, which carry no
    // examples. This also catches numbers under example keys the schema does not define.
    const examples: Array<[string, unknown]> = []
    collectExamples(spec, '', examples)
    expect(examples.length).toBeGreaterThan(100)
    const problems: string[] = []
    examples.forEach(([where, value]) => numbersIn(value, where, problems))
    expect(problems).toEqual([])
  })

  it('keeps long numeric identifiers as exact strings rather than floats', () => {
    expect(spec.components.schemas.Max35Text.example).toBe('12345678901234567890123456789012345')
    expect(spec.components.schemas.Max15NumericText.example).toBe('123456789012345')
    expect(spec.components.schemas.GroupHeader129.example.NbOfTxs).toBe('1')
  })
})
