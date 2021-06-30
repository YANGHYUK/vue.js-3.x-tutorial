module.exports = {
  root: true,
  env: {
      node: true,
  },
  "plugins": ["@typescript-eslint"],
  extends: [
      '@vue/typescript/recommended',
  ],
  parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
  },
};