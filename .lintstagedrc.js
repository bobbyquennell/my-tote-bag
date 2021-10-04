module.exports = {
  '**/*.{js?(x),ts?(x)}': () => 'lerna run lint:fix',
  '**/*.ts?(x)': () => 'lerna run ts-check', // add ts error check in lint-staged: https://stackoverflow.com/questions/60514929/eslint-not-reporting-typescript-compiler-type-checking-errors
}
