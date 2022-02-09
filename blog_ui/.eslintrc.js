module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ],

  plugins: [
    'prettier',
    'vue',
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    process: 'readonly',
    Capacitor: 'writable',
    chrome: 'writable'
  },

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',
    'func-names': 'off',


    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-console": "off"
  }
}
