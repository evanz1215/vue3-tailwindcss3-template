module.exports = {
    env: {
        node: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
      ],
      'parserOptions': {
        'ecmaVersion': 2021
    },
      rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'], // double
        'vue/multi-word-component-names': 'off'
      },
      
};