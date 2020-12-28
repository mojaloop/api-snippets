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

## Swagger-UI

The snippets specification is previewable using swagger-ui. Swagger-UI files
are found in `docs/dist/`. Github pages uses the master branch `docs/` folder
to build the page found at https://docs.mojaloop.io/api-snippets/

## Dev Tools

To create snippets the tool found at https://www.npmjs.com/package/evrythng-openapi-tools
was used to break up large specification files. Some manual edits to the paths
are needed to format the files.

TODO: Add more detailed instructions for this workflow.
- `npm i -g evrythng-openapi-tools`
- `evrythng-openapi-tools split /path/to/my-large-specifcation-file.yaml /path/to/output-directory/`

## Questions

1) Are paths in the Mojaloop Specification considered "snippets"? Are they re-used widely across services?
2) Do we need to support both Swagger 2.0 and Open Api 3?
3) Does it make sense to have a common folder between versions for specification snippets that never change
   to cut down on files?

## DTO TypeScript definitions for snippets
> [Data Transfer Object](https://en.wikipedia.org/wiki/Data_transfer_object) description


The reason to have DTO is to allow separation between data transfer and data access phases. 

From OpenAPI definition perspective `api-snippets` module allows building api.yaml definitions using a structured set of building blocks - `the snippets`.

From microservices implementation point of view there is a need to have similar mechanism to allow declaring aggregated api data transfer types using basic types. These basic types reflect api-snippets definitions at implementation language level: TypeScript and Javascript.

### Example of payload definition

Let assume we want to define a new type to represent the http request POST payload body with two properties: `requestId` and `amount` using already defined in `api-snippets` basic types: `CorrelationId` and `Money`


```typescript
import v1_0 from '@mojaloop/api-snippets'

class ExampleTransferRequest {
  requestId: v1_0.CorrelationId
  amount: v1_0.Money
}
```

### structure of `@mojaloop/api-snippets` Javascript/TypeScript type system module

> `v1_0` types are already defined  
> `TODO`: declare `v1_1` and `thirdparty`

`api-snippets` OpenAPI definitions are grouped in three sections/folders with corresponding Javascript sub-modules

| OpenApi                      | Javascript/TypeScript |
|------------------------------|-----------------------|
| v1.0/openapi3/schemas        | v1_0                  |
| v1.1/openapi3/schemas        | v1_1                  |
| thirdparty/opeanapi3/schemas | thirdparty            |


The same structure is kept in Javascript module, but with some handy shortcuts: there are no `openapi3/schemas` sub-folders/sub-modules, instead we ca

To use the types defined for `CorrelationId` and `Money` snippets 
- `v1.0/openapi3/schemas/CorrelationId.yaml`
- `v1.0/openapi3/schemas/Money.yaml`

You can import them in a such short way:
```typescript
import { CorrelationId, Money } from `@mojaloop/api-snippets/v1_0`

class ExampleTransferRequest {
  requestId: CorrelationId
  amount: Money
}
```

### DTO TODO:
- generation from yaml
- testing of DTO declarations
- linting