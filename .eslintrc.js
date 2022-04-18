module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": ["error", {
      "ignores": ['index', 'login',  'create', 'edit', 'preview',  'register', 'logout', 'Header', 'Footer', 'loading', '_bookId', 'like', 'myPage', 'favorite', 'introduce', 'Loading', 'empty']
    }],
    // "no-restricted-syntax": ["error", "SequenceExpression"],
    "vue/attribute-hyphenation": ["error", "never" , {
      "ignore": ['isLoading']
    }]
  },
}

