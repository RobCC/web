module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
  ],
  rules: {
    'function-no-unknown': [
      true,
      {
        // See: https://github.com/stylelint-scss/stylelint-config-recommended-scss/pull/93
        ignoreFunctions: ['utils.vw', 'math.div', '-'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'number-max-precision': null,
    'max-nesting-depth': 3,
    'number-leading-zero': null,
    'number-no-trailing-zeros': [true, { severity: 'warning' }],
    'string-quotes': 'double',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': null,
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-space-before': 'always-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-pseudo-class-case': 'lower',
    'selector-type-case': 'lower',
    'comment-whitespace-inside': 'always',
    indentation: 2,
    'max-empty-lines': 2,
    'no-eol-whitespace': true,
    'no-empty-first-line': true,
    'at-rule-no-unknown': null,
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-rule-no-unknown': true,
  },
};
