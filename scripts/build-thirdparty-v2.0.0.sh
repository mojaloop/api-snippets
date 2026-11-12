#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

openapi bundle --output docs/thirdparty-v2.0-payment-initiation-snippets.yaml --ext yaml thirdparty/v2_0/payment-initiation/openapi.yaml
npx ts-node --transpile-only src/scripts/openapi-refactor.ts docs/thirdparty-v2.0-payment-initiation-snippets.yaml docs/thirdparty-v2.0-payment-initiation-snippets.yaml
swagger-cli validate docs/thirdparty-v2.0-payment-initiation-snippets.yaml
