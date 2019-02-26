const config = require('./webpack.config.dev');

const webpack = require('webpack');

module.exports = {
  ...config,
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
