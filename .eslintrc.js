const path = require('path');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    MathJax: 'readonly',
  },
  plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['#', path.resolve(path.join(__dirname, './src'))],
          [
            'Components',
            path.resolve(path.join(__dirname, './src/components')),
          ],
          ['~', path.resolve(path.join(__dirname, '.'))],
        ],
        extensions: ['.js'],
      },
    },
  },
  rules: {
    'max-len': ['error', { code: 100, tabWidth: 2, comments: 80 }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-unused-vars': 'warn',
  },
};
