#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

# Build the admin snippets
openapi bundle --output docs/thirdparty-v2.0-admin-snippets.yaml --ext yaml thirdparty/v2_0/admin/openapi.yaml
openapi lint --extends=minimal --skip-rule=no-server-trailing-slash docs/thirdparty-v2.0-admin-snippets.yaml

# Build the payment initiation snippets
openapi bundle --output docs/thirdparty-v2.0-payment-initiation-snippets.yaml --ext yaml thirdparty/v2_0/payment-initiation/openapi.yaml
openapi lint --extends=minimal docs/thirdparty-v2.0-payment-initiation-snippets.yaml
