module.exports = {
  reject: [
    // 10.1.0 is a breaking change and has some issues
    '@apidevtools/json-schema-ref-parser',
    // Upgrading the following redocly dependencies breaks with the following error:
    // node_modules/@redocly/openapi-core/lib/types/redocly-yaml.d.ts:2:33 - error TS2307: Cannot find module 'json-schema-to-ts' or its corresponding type declarations.
    '@redocly/cli',
    '@redocly/openapi-core',
    // Updating eslint breaks the build
    'eslint',
    // Breaks peer dependencies with v7+
    'eslint-plugin-promise'
  ]
}
