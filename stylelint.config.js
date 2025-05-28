export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.css'],
    },
  ],
};
