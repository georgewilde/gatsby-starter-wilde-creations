module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `<rootDir>/storybook-static/`,
  ],
  transform: {
    '^.+\\.stories\\.tsx$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '^@components/(.*)$': `<rootDir>/src/components/$1`,
    '^@static/(.*)$': `<rootDir>/src/static/$1`,
    '^@context/(.*)$': `<rootDir>/src/context/$1`,
    '^@hooks/(.*)$': `<rootDir>/src/hooks/$1`,
    '^@hooks$': `<rootDir>/src/hooks/`,
    '^@mocks/(.*)$': `<rootDir>/__mocks__/$1`,
    '^@mocks$': `<rootDir>/__mocks__/`,
    '^@themes/(.*)$': `<rootDir>/src/themes/$1`,
    '^@themes$': `<rootDir>/src/themes/`,
  },
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
