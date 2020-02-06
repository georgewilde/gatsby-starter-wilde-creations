module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '^@components/(.*)$': `<rootDir>/src/components/$1`,
    '^@static/(.*)$': `<rootDir>/src/static/$1`,
    '^@context/(.*)$': `<rootDir>/src/context/$1`,
    '^@hooks/(.*)$': `<rootDir>/src/hooks/$1`,
    '^@hooks$': `<rootDir>/src/hooks/`,
    '^@themes/(.*)$': `<rootDir>/src/themes/$1`,
    '^@themes$': `<rootDir>/src/themes/`,
  },
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
