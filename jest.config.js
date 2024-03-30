/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  bail: false,
  verbose: false,
  // The bail config option can be used here to have Jest stop running tests after
  // the first failure.
  bail: false,

  // Indicates whether each individual test should be reported during the run.
  verbose: false,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  verbose: true,
  forceExit: true,
  // clearMocks: true,
  // resetMocks: true,
  // restoreMocks: true,
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: ["src/**/*.{js,ts}"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
  },
};
