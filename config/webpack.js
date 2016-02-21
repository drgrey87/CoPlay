const webpack = require('webpack'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  path = require('path'),
  NODE_ENV = process.env.NODE_ENV || 'development';

module.exports.webpack = {

  options: {
    entry: './assets/js/main',
    output: {
      filename: './assets/js/bundle.js',
      publicPath: "./assets/",
      library: 'main'
    },
    watchOptions: {
      aggregateTimeout: 100
    },
    devtool: 'eval',
    resolve: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".js"]
    },
    resolveLoader: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".js"],
      moduleTemplates: ["*-loader", "*"]
    },
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/,
          query: {
            presets: ['es2015', 'react'],
            plugins: ['transform-runtime']
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['public/js/'], {
        root: path.resolve(__dirname, '../.tmp/'),
        verbose: true,
        dry: false
      }),
      new CopyWebpackPlugin(
        [
          {
            from: './assets/js',
            to: './.tmp/public/js',
            toType: 'dir'
          }
        ],
        {
          ignore: ['./assets/js/dependencies/']
        }
      )
    ]
  }
};

if (NODE_ENV === 'production') {
  //console.log(module.exports);
  module.exports.webpack.options.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        unsafe: true,
        warnings: true
      }
    })
  );
}
