#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

swagger-cli bundle -o ./thirdparty/v1_0/openapi3/thirdparty-pisp-api.yaml -t yaml ./thirdparty/v1_0/openapi3/thirdparty-pisp-api.template.yaml
