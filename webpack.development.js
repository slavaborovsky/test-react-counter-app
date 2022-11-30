const webpack = require('webpack');

module.exports = () => ({
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
});
