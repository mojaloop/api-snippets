#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

openapi bundle --output docs/thirdparty-v2.0-admin-openapi3-snippets.yaml --ext yaml thirdparty/v2_0/admin/openapi.yaml
openapi lint --extends=minimal --skip-rule=no-server-trailing-slash docs/thirdparty-v2.0-admin-openapi3-snippets.yaml
