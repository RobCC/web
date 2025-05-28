import js from '@eslint/js';
import path from 'path';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

export default tseslint.config(
  { ignores: ['dist', 'build'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      importPlugin.flatConfigs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
        }),
      ],
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  prettierConfig,
);

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     jest: true,
//   },
//   ignorePatterns: ['build', 'webpack', '.eslintrc.js'],
//   rules: {
//     'no-console': ['error', { allow: ['error'] }],
//     'prettier/prettier': 'error',
//     'no-param-reassign': [
//       'error',
//       {
//         props: true,
//         ignorePropertyModificationsFor: ['state'],
//       },
//     ],
//     'react/jsx-props-no-spreading': 0,
//   },
//   overrides: [
//     {
//       files: ['*.ts', '*.tsx'],
//       rules: {
//         'react/require-default-props': 0,
//       },
//     },
//     {
//       files: ['*.js', '*.cjs'],
//       rules: {
//         '@typescript-eslint/no-var-requires': 0,
//       },
//     },
//   ],
// };
