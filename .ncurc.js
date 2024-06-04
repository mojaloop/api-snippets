module.exports = {
  reject: [
    // 10.1.0 is a breaking change and has some issues
    '@apidevtools/json-schema-ref-parser',
    // upgrade to eslint 9 is non-trivial
    'eslint',
  ]
}
