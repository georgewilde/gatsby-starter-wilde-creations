const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }: any) => {
  // Set the NODE_ENV value to "production" to allow babel-plugin-remove-graphql-queries to remove static queries.
  process.env.NODE_ENV = 'production';

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

  return config;
};
