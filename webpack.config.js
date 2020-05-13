const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        dateutils: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'dateutils'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            resolve: {
                extensions: [".js"]
            },
            use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
              }
          }
      }
      ],
  }
};