module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'react/jsx-filename-extension': [0],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never',
    }],
    'import/no-unresolved': 0,
    quotes: ['error', 'single'],
    'valid-jsdoc': 0,
    'object-curly-spacing': ['error', 'always'],
    indent: ['error', 2],
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    'max-len': ['error', { code: 120 }],
  },
}
