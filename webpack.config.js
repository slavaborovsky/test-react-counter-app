const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// eslint-disable-next-line import/no-dynamic-require, global-require
const getModeConfig = ({ mode, ...args }) => require(`./webpack.${mode}`)(args);

module.exports = (options) => {
  const { mode, analyzer } = options;

  return merge(
    {
      mode,
      entry: path.join(__dirname, 'src', 'index.tsx'),
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
          },
          {
            test: /\.css$/i,
            exclude: /\.module\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              'postcss-loader',
            ],
          },
          {
            test: /\.module\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                },
              },
              'postcss-loader',
            ],
          },
          {
            test: /\.module\.s(a|c)ss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 3,
                  modules: true,
                },
              },
              'sass-loader',
            ],
          },
          {
            test: /\.(png|jpe?g|svg|gif)$/,
            use: ['file-loader'],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', 'index.html'),
        }),
        new ESLintWebpackPlugin({
          fix: true,
        }),
        analyzer === 'true' && new BundleAnalyzerPlugin(),
      ].filter(Boolean),
    },
    getModeConfig(options)
  );
};
