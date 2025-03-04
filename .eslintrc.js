module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Add these additional rules based on your needs:
    'no-unused-vars': 'warn', // Instead of 'error', change to 'warn' to allow for development.
    'no-undef': 'warn', // Instead of 'error', change to 'warn' to allow for development.
    'vue/no-unused-components': 'warn', // Warn on unused components, but don’t error.
    'prettier/prettier': 'off', // Disable Prettier warnings if they are not critical.
    'vue/no-mutating-props': 'off' // Turn off if you're modifying props directly (not recommended in Vue).
  }
}
