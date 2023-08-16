module.exports = {
  reject: [
    // Upgrading past husky@4 to involves a full config migration with no current and apparent benefit.
    // So we are just sticking to husky@4.x.x for the time being.
    //'husky',
    // 10.1.0 is a breaking change and has some issues
    '@apidevtools/json-schema-ref-parser',
  ]
}
