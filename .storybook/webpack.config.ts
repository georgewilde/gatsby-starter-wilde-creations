import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json'),
      }),
    ],
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        loader: require.resolve('babel-loader'),
        exclude: [/node_modules\/(?!(gatsby)\/)/],
        options: {
          presets: [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-env'),
          ],
          plugins: [
            require.resolve('@babel/plugin-proposal-class-properties'),
            require.resolve('babel-plugin-remove-graphql-queries'),
          ],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
          plugins: [
            require.resolve('@babel/plugin-proposal-class-properties'),
            require.resolve('babel-plugin-remove-graphql-queries'),
          ],
        },
      },
    ],
  },
};

export default config;
