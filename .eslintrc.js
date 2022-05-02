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
      "ignore":["max-width", "clipped-left", "no-gutters", "three-line"]
    }],
    "no-console": "off",
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            }
        ]
  },
}

