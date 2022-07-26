const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  noStackTrace: true,
  collectCoverage: true,
  coverageReporters: ['lcov', 'cobertura', 'json'],
  coverageDirectory: './coverage',

  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      isolatedModules: true
    }
  },

  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/*)', '<rootDir>/node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ],
  transform: { '^.+\\.(ts|js|mjs|html)$': 'jest-preset-angular' }
};
