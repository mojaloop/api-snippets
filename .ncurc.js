module.exports = {
  reject: [
    // js-yaml 5.x removed the named `types` export, which breaks this repo's build:
    // `The requested module 'js-yaml' does not provide an export named 'types'`.
    'js-yaml',
    // Contain breaking change for ts-node
    'typescript'
  ]
}
