module.exports = {
  preset: 'react-native',
  verbose: true,
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  transformIgnorePatterns: ['node_modules/?!(static-container)'],
  cacheDirectory: '.jest/cache',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  testRunner: 'jest-jasmine2',
  setupFilesAfterEnv: ['./setup-tests.js'],
};
