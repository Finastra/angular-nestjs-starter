export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: true,
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer',
      ],
    },
  },
  roots: ['<rootDir>/apps', '<rootDir>/libs'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'libs', '<rootDir>'],
  testMatch: ['**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  moduleNameMapper: {
    '@finastra/features/home': '<rootDir>/libs/features/home/src/index.ts',
    '@finastra/services/cats': '<rootDir>/libs/services/cats/src/index.ts',
    '@finastra/services/proxy': '<rootDir>/libs/services/proxy/src/index.ts',
    '@finastra/api-interfaces': '<rootDir>/libs/api-interfaces/src/index.ts',
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcovonly', 'text', 'clover'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
