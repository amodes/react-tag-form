/** @format */

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "import",
    "react-hooks",
    "jest",
    "unicorn",
  ],
  rules: {
    "no-cond-assign": 0,
    "no-unused-vars": 0,
    "object-shorthand": [2, "always"],
    "no-const-assign": 2,
    "no-class-assign": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "no-unreachable": 2,
    "valid-typeof": 2,
    "one-var": [2, "never"],
    "prefer-const": [2, { destructuring: "all" }],
    "no-inner-declarations": 0,
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": "off",
    "max-lines-per-function": ["warn", { max: 100, skipBlankLines: true }],
    complexity: ["warn", 7],
    yoda: ["error", "never", { exceptRange: true }],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external", "internal"]],
        "newlines-between": "always-and-inside-groups",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "jest/no-focused-tests": "error",
  },
  env: {
    es6: true,
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
  },
  settings: {
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.spec.{ts,tsx}"],
      rules: {
        "max-lines-per-function": 0,
      },
    },
  ],
};
