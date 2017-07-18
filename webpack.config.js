var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //define entry point
    entry: {
        index: './src/index.js'
    },

    //define output point
    output: {
        filename: './dist/bundle.js'
    },
    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
              test: /\.scss$/,
              loaders: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
      })
    ]
}