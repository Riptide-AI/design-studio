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
    // Your existing rules here
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    // You can specify overrides for specific files or directories here
  ],
};
