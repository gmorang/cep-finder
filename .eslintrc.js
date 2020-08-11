module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/extensions': [
      '.ts',
    ],
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': ['never'],
    'max-len': ['warn', 160],
    'no-plus-plus': 'off',
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'warn',
    'consistent-return': 'warn',
    camelcase: 'off',
    'arrow-parens': 'off',
    'no-nested-ternary': 'off',
    'object-curly-newline': ['error', { // allow more than 4 https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L396
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    }],
    'import/prefer-default-export': 'off',
  },
};
