// eslint.config.mjs
import pluginTs from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  // Ignore patterns (instead of .eslintignore)
  {
    ignores: [
      "node_modules/**/*.js",
      ".circleci/*",
      "config.ts",
      "**/openapi.ts",
    ],
  },

  // Base config for TS + Prettier + Import
  {
    plugins: {
      "@typescript-eslint": pluginTs,
      prettier: pluginPrettier,
      import: importPlugin,
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
        tsConfigRootDir: "./",
      },
    },
    rules: {
      ...pluginTs.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...prettier.rules,
      "prettier/prettier": "error",

      // Your custom rules
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-empty-interface": "warn",
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },

  // Overrides
  {
    files: ["test/**/*.ts"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    files: ["*.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];
