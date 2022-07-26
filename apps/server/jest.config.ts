/* eslint-disable */
export default {
  displayName: 'server',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json'
    }
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest'
  },
  coverageDirectory: '../../coverage/apps/server',
  collectCoverage: true,
  coverageReporters: ['lcov', 'cobertura', 'json'],
  testEnvironment: 'node'
};
