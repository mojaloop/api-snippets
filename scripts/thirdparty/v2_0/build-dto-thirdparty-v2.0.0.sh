#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

openapi-typescript docs/thirdparty-v2.0-payment-initiation-snippets.yaml --output src/thirdparty/payment-initiation/openapi.ts
