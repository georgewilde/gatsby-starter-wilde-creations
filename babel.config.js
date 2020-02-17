module.exports = api => {
  const isTest = api.env('test');

  return {
    presets: [
      'babel-preset-gatsby',
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
    ],
    plugins: [
      'macros',
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      [
        'babel-plugin-styled-components',
        { ssr: !isTest, displayName: !isTest }, // This is required due to https://github.com/styled-components/jest-styled-components/issues/290
      ],
    ],
  };
};
