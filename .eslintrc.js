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
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
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
      {
        caseSensitive: true,
        natural: true,
      },
    ],
  },
};
