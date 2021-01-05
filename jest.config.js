'use strict'
// const { pathsToModuleNameMapper } = require('ts-jest/utils')
// const { compilerOptions } = require('./tsconfig')
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  clearMocks: true,
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  //   prefix: '<rootDir>/'
  // }),
  reporters: ['jest-junit', 'default']
}
