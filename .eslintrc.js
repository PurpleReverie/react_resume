const globals = require('globals');
const pluginJs = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const pluginReactConfig = require('eslint-plugin-react/configs/recommended');
const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    'prettier/prettier': ['warn'],
    indent: ['warn', 2], // 2 spaces indentation
    'no-mixed-spaces-and-tabs': ['warn'],
    semi: ['warn', 'always'], // Ensure semicolons are always used
    quotes: ['warn', 'single'], // Use single quotes
    'jsx-quotes': ['warn', 'prefer-double'], // Use double quotes in JSX attributes
    'comma-dangle': ['warn', 'always-multiline'], // Ensure trailing commas where valid
    'eol-last': ['warn', 'always'], // Ensure file ends with a newline
    'space-before-function-paren': ['warn', 'never'], // No space before function parenthesis
    'object-curly-spacing': ['warn', 'always'], // Ensure spaces inside curly braces
    'array-bracket-spacing': ['warn', 'never'], // No spaces inside array brackets
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
