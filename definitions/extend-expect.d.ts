declare namespace jest {
  interface Matchers<R> {
    // @ts-ignore - An import path cannot end with a '.d.ts' extension.
    toHaveStyleRule: import('node_modules/jest-styled-components/typings/index.d.ts').jest.Matchers['toHaveStyleRule'];
  }
}
