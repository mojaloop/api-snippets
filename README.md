# api-snippets

## Swagger UI Api Preview

https://docs.mojaloop.io/api-snippets/

## Usage

Install the snippet library
```bash
  npm install @mojaloop/api-snippets --save-dev
```

Install the reference resolving library
```bash
  npm install swagger-cli --save-dev
```

Modify swagger file to reference `api-snippets`.

ex.
```yaml
Money:
  $ref: /path/to/node_modules/@mojaloop/api-snippets/v1.0/openapi3/schemas/Money.yaml
```

Render and resolve the references.
```bash
  swagger-cli bundle -t yaml -o api_render.yaml api.yaml
```

Validate the result file.
```bash
  swagger-cli validate api_render.yaml
```

## Quick Demonstration
![demonstration](./docs/demonstration.gif "Demonstration")

## Questions

1) Are paths in the Mojaloop Specification considered "snippets"? Are they re-used widely across services?
2) Do we need to support both Swagger 2.0 and Open Api 3?
