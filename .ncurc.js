module.exports = {
  reject: [
    // Upgrading past husky@4 to involves a full config migration with no current and apparent benefit.
    // So we are just sticking to husky@4.x.x for the time being.
    'husky',
    // Transpiler currently fails. TODO: Story to investigate and fix.
    'openapi-typescript',
    // 10.1.0 is a breaking change and has some issues
    '@apidevtools/json-schema-ref-parser',
    // Upgrading typescript to 5.0.4 causing unit test failures due to breaking changes related to `ttypescript` for 'custom transformers'
    'typescript',
    // TODO: The new version of npm-check-updates uses new Glob v9.x and it is introducing a dependency Package "path-scurry@1.6.1" which is licensed under "BlueOak-1.0.0" which is not permitted by the Mojaloop License Policy
    //'npm-check-updates',
    // TODO: Upgrading ts-auto-mock is breaking the npm install
    'ts-auto-mock'
  ]
}
