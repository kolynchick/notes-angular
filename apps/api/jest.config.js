module.exports = {
  displayName: 'api',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json'
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/api',
  coverageReporters: ['html', ["lcovonly", {"projectRoot": __dirname}], 'text-summary'],
  coveragePathIgnorePatterns: ['<rootDir>/testing'],
  testEnvironment: 'node',
};
