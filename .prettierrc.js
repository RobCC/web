export default {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
