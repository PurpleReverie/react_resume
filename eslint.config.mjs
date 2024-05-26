import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
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
  },
];
