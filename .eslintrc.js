module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Uses prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    // Enforces ES6+ import/export syntax
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
    tsConfigRootDir: './'
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Sometimes openapi generator emits empty interfaces
    '@typescript-eslint/no-empty-interface': 'warn'
  },
  settings: {
    'import/resolver': {
      typescript: {}
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
