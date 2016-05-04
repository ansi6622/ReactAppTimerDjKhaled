const DEV = process.env.NODE_ENV==='development'

module.exports = {
  entry: './src/app.js',
  output: {
      path: `${__dirname}/public`, //es6 declaration via the back ticks
      filename: 'bundle.js'
    },

    devtool: DEV ? 'source-map' : null,

    devServer: {
      contentBase: 'public',
      historyApiFallback: {
        index: '/index.html'
      }
    },

    module: {
      loaders: [
        {
          test:/\.js/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
        test:/\.s?css/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/
      }
      ]
    }
};
