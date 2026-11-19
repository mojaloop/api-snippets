import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

// ISO 20022 defines GrpHdr.NbOfTxs as Max15NumericText, a numeric *string*.
// The examples in the OpenAPI document must therefore use "1", not 1, otherwise
// implementers who copy them produce messages that strict ISO 20022 parsers reject.
// See https://github.com/mojaloop/ml-api-adapter/issues/693
describe('v2_0_ISO20022 OpenAPI examples', () => {
  const specFile = path.join(__dirname, '../../docs/fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml')
  const spec: any = yaml.load(fs.readFileSync(specFile, 'utf8'))

  const findNbOfTxsValues = (node: unknown, found: unknown[] = []): unknown[] => {
    if (Array.isArray(node)) {
      node.forEach((item) => findNbOfTxsValues(item, found))
    } else if (node !== null && typeof node === 'object') {
      for (const [key, value] of Object.entries(node)) {
        // Skip schema definitions (objects); only collect literal example values.
        if (key === 'NbOfTxs' && (value === null || typeof value !== 'object')) {
          found.push(value)
        } else {
          findNbOfTxsValues(value, found)
        }
      }
    }
    return found
  }

  it('defines Max15NumericText as a string with a string example', () => {
    const schema = spec.components.schemas.Max15NumericText
    expect(schema.type).toBe('string')
    expect(typeof schema.example).toBe('string')
  })

  it('uses a string for every NbOfTxs example', () => {
    const values = findNbOfTxsValues(spec)
    expect(values.length).toBeGreaterThan(0)
    values.forEach((value) => expect(typeof value).toBe('string'))
  })
})
