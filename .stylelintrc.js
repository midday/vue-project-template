module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  rules: {
    'no-empty-source': null,
    'no-descending-specificity': [],
    'prettier/prettier': true,
    'font-family-no-missing-generic-family-keyword': null,
    'block-no-empty': null,
  },
}
