const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.(.jpe?g|png|gif|svg|ico|woff|woff2|eot|ttf)$/i,
          use: {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
            },
          }
        }
      ]
    }
  }
}