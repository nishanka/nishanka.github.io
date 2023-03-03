const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: {
    main: [
        './src/js/main.js',
        './src/css/fullpage.css',
        './src/css/main.css'
    ],
  },
  mode: 'none',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    //   {
    //     test: /\.(jpe?g|png|gif|svg)$/i,
    //     use: [
    //         {
    //             loader: 'file-loader',
    //             options: {
    //               name: '[name].[ext]',
    //               outputPath: './images/'
    //             }
    //           }
    //     ]
    //   },
    //   {
    //     test:/\.html$/,
    //     use: [
    //       'html-loader'
    //     ]
    //   },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // new HtmlWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ],
    minimize: true,
  }
};