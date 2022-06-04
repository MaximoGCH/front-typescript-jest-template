module.exports = {
  parser: '@typescript-eslint/parser',
  "plugins": [
    "@typescript-eslint", 
    "prettier"
  ],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  env: {
    browser: true,
    es2021: true
  },
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
  rules: {
    "no-var": "error",
    "@typescript-eslint/no-empty-function": "off"
  },
};

