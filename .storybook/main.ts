const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    'storybook-dark-mode',
  ],
  webpackFinal: async (config: any) => {
    // Set the NODE_ENV value to "test" to allow babel-plugin-remove-graphql-queries to remove static queries
    // and to prevent babel from loading the "babel-preset-gatsby" preset as this requires Gatsby to have been built first.
    process.env.NODE_ENV = 'test';

    // Transpile the Gatsby node module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // Use babel-loader which works with @babel/core@7.
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');

    // Use @babel/preset-react for JSX and env (instead of staged presets).
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];

    config.module.rules[0].use[0].options.plugins = [
      // Use @babel/plugin-proposal-class-properties for class arrow functions.
      require.resolve('@babel/plugin-proposal-class-properties'),
      // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook.
      require.resolve('babel-plugin-remove-graphql-queries'),
    ];

    // Prefer Gatsby ES6 entrypoint "module" over the commonjs "main" entrypoint.
    config.resolve.mainFields = ['browser', 'module', 'main'];

    // Include transpiling of typescript files.
    config.resolve.extensions = ['.ts', '.tsx', '.css', '.js'];

    // Let webpack know where to find the typescript config file.
    // This is used to get the config to resolve the "paths".
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ];

    // Add a rule to handle TypeScript files.
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          [
            'react-app',
            {
              flow: false,
              typescript: true,
            },
          ],
        ],
      },
    });

    // Add a rule to handle the Storybook source plugin.
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });

    // Add a rule to handle tailwind CSS.
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('postcss-import'),
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
