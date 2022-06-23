const nextJest = require('next/jest');

const tsconfig = require('./tsconfig.json');

const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.ts'],
  moduleNameMapper,
  roots: ['<rootDir>/src/tests'],
};

module.exports = createJestConfig(customJestConfig);
