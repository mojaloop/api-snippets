#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

npx ts-node --transpile-only src/scripts/openapi-refactor.ts docs/thirdparty-v1.0-openapi3-snippets.yaml docs/thirdparty-v1.0-openapi3-snippets.yaml
