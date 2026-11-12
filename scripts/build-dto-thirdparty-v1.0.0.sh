#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

openapi-typescript docs/thirdparty-v1.0-openapi3-snippets.yaml --output src/thirdparty/openapi.ts
