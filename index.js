module.exports = {
  env: {
    node: true,
    mocha: true
  },
  extends: 'airbnb-base',
  plugins: [
    'import',
    'mocha',
    'json'
  ],
  rules: {
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'prefer-destructuring': 'off'
  }
};
