const path = require('path');

module.exports = {
  entry: './src/dropdown.js',
  output: {
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'dropdown.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
