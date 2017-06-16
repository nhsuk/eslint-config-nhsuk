module.exports = {
  env: {
    node: true,
    mocha: true
  },
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
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
    'react/require-extension': 'off'
  }
};
