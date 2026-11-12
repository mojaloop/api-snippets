#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

openapi bundle --output docs/thirdparty-v1.0-openapi3-snippets.yaml --ext yaml thirdparty/v1_0/openapi3/openapi.yaml
npx ts-node --transpile-only src/scripts/openapi-refactor.ts docs/thirdparty-v1.0-openapi3-snippets.yaml docs/thirdparty-v1.0-openapi3-snippets.yaml
swagger-cli validate docs/thirdparty-v1.0-openapi3-snippets.yaml
