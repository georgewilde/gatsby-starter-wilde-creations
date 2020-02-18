module.exports = api => {
  const isTest = api.env('test');

  const presets = [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ];

  if (!isTest) {
    presets.push('babel-preset-gatsby');
  }

  const plugins = [
    'macros',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    [
      'babel-plugin-styled-components',
      { ssr: !isTest, displayName: !isTest }, // This is required due to https://github.com/styled-components/jest-styled-components/issues/290
    ],
  ];

  return {
    presets,
    plugins,
  };
};
