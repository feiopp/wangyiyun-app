module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-const': 0,
    'space-before-function-paren': [
      'error',
      {anonymous: 'always', named: 'never', asyncArrow: 'always'}
    ],
    'object-curly-spacing': ['error', 'never'],
    'vue/return-in-computed-property': [
      'error',
      {
        treatUndefinedAsUnspecified: false
      }
    ]
  }
}
