module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global'],
          },
        ],
      },
    },
  ],
};
