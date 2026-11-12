#!/usr/bin/env bash
set -e

export PATH="$PWD/node_modules/.bin:$PATH"

swagger-cli bundle -o ./thirdparty/v2_0/payment-initiation/thirdparty-pisp-admin-api.yaml -t yaml ./thirdparty/v2_0/payment-initiation/thirdparty-pisp-admin-api.template.yaml
