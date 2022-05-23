module.exports = {
  // parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    'cucumber',
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // Enforces ES6+ import/export syntax
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
    tsConfigRootDir: __dirname
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'error',
    'no-console': 'off',
    quotes: ['off', 'single'], // generated code contains double quotes
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'cucumber/async-then': 2,
    'cucumber/expression-type': 2,
    'cucumber/no-restricted-tags': [2, 'wip', 'broken', 'foo'],
    'cucumber/no-arrow-functions': 2,
    'import/default': 'warn',
    'import/extensions': 'off',
    'max-len': 'off', // there are very long machine generate lines
    'no-use-before-define': 'warn' // generated code brakes this rule
  },
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    }
  },
  overrides: [
    {
      // Disable some rules that we abuse in unit tests.
      files: [
        'tests /**/*.ts'
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    },
    {
      files: [
        '*.js'
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
