module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'next', 'next/core-web-vitals'],
  parserOptions: {
    ecmaVersion: 12, // Or 'latest'
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],

  rules: {
    'linebreak-style': ['error', 'windows'],
  },
};
