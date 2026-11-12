#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

openapi bundle --output docs/thirdparty-admin-v2.0-openapi3-snippets.yaml --ext yaml thirdparty/v2_0/payment-initiation/openapi-admin.yaml
npx ts-node --transpile-only src/scripts/openapi-refactor.ts docs/thirdparty-admin-v2.0-openapi3-snippets.yaml docs/thirdparty-admin-v2.0-openapi3-snippets.yaml
swagger-cli validate docs/thirdparty-admin-v2.0-openapi3-snippets.yaml
