const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      }]
  }
//   module: {
//     rules: [
//       {
//         test: /.s?css$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   optimization: {
//     minimizer: [
//       new CssMinimizerPlugin(),
//     ],
//     minimize: false,
//   },
//   plugins: [new MiniCssExtractPlugin()],
};