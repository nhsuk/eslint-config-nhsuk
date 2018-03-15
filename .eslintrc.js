module.exports = {
  env: {
    mocha: true,
    node: true,
  },
  extends: 'airbnb-base',
  plugins: [
    'import',
    'json',
    'mocha',
  ],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        exports: 'never',
        functions: 'never',
        imports: 'never',
        objects: 'only-multiline',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'prefer-destructuring': 'off',
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, natural: true },
    ],
  },
};
