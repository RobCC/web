const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['#', path.resolve(path.join(__dirname, './src'))],
          ['~', path.resolve(path.join(__dirname, '.'))],
        ],
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'arrow-parens': [1, 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: 2,
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default': 0,
    'padding-line-between-statements': [
      1,
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 1,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
