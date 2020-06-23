# api-snippets

## Usage

Install the snippet library
```bash
  npm install api-snippets --save-dev
```

Install the reference resolving library
```bash
  npm install multi-file-swagger --save-dev
```

Modify swagger file to reference `api-snippets`.

ex.
```yaml
Money:
  $ref: node_modules/api-snippets/v1.0/openapi3/definitions/Money.yaml
```

Render and resolve the references.
```bash
  multi-file-swagger -o yaml api.yaml > api_render.yaml
```

## Questions

1) Are paths in the Mojaloop Specification considered "snippets"? Are they re-used widely across services?
2) Do we need to support both Swagger 2.0 and Open Api 3?
