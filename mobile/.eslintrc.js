module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'testing-library', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'block-scoped-var': 2,
    camelcase: 0,
    complexity: 2,
    'consistent-return': 0,
    curly: 'error',
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: 2,
    'eol-last': 0,
    'jest/no-focused-tests': 2,
    'jsx-quotes': [2, 'prefer-single'],
    'no-caller': 2,
    'no-console': 2,
    'no-div-regex': 2,
    'no-dupe-class-members': 2,
    'no-else-return': 0,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-mixed-operators': 0,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 0,
    'no-process-env': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 0,
    'no-script-url': 0,
    'no-self-compare': 2,
    'no-sequences': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-with': 2,
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    radix: 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 2,
    'react/prop-types': [
      2,
      {
        ignore: ['children', 'className', 'id', 'style'],
        skipUndeclared: true,
      },
    ],
    'react/self-closing-comp': 2,
    semi: 2,
    strict: 1,
    'vars-on-top': 0,
    'wrap-iife': [2, 'inside'],
    yoda: 2,
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
  },
};
