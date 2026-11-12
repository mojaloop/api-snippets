#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

npx ts-node --transpile-only src/scripts/openapi-refactor.ts docs/thirdparty-v2.0-payment-initiation-snippets.yaml docs/thirdparty-v2.0-payment-initiation-snippets.yaml
npx ts-node --transpile-only src/scripts/openapi-refactor.ts docs/thirdparty-v2.0-admin-openapi3-snippets.yaml docs/thirdparty-v2.0-admin-openapi3-snippets.yaml
