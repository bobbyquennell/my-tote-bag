module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: "/src/.*\\.test\\.(ts|tsx|js)$",
  collectCoverage: true,
  collectCoverageFrom: ["packages/*/src/**/*.{js,jsx,ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

//TODO:
/*
To use ts-jest in a project with monorepo structure, you'll need to use Jest projects configuration.
When using Jest projects configuration, Jest will run ts-jest against each project which is defined in the configuration.
*/
// https://kulshekhar.github.io/ts-jest/docs/guides/using-with-monorepo

//https://github.com/kulshekhar/ts-jest/issues/364#issuecomment-647506833
