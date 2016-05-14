const webpack = require('webpack'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  path = require('path'),
  NODE_ENV = process.env.NODE_ENV || 'development';

module.exports.webpack = {

  options: {
    context: path.resolve(__dirname, '../assets/js'),
    entry: [
      // 'webpack-hot-middleware/client',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './index'
    ],
    output: {
      path: path.resolve(__dirname, '../assets/js'),
      filename: 'bundle.js',
      // publicPath: path.resolve(__dirname, '../.tmp/public/js'),
      publicPath: '/',
      // library: 'main'
    },
    // watchOptions: {
    //   aggregateTimeout: 100
    // },
    // devtool: 'cheap-module-source-map',
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
      preLoaders: [
        {
          test: /\.js$/,
          loaders: ['eslint'],
          include: [
            path.resolve(__dirname, "../assets/js"),
          ],
        }
      ],
      loaders: [
        {
          test: /.jsx?$/,
          loaders: ['react-hot', 'babel-loader'],
          exclude: /(node_modules|bower_components)/,
          plugins: ['transform-runtime']
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      //new webpack.NoErrorsPlugin(),
      //new webpack.optimize.CommonsChunkPlugin({
      //  name: 'common',
      //  minChunks: 2
      //}),
      new webpack.ProvidePlugin({

      }),
      new CleanWebpackPlugin(['public/js/'], {
        root: path.resolve(__dirname, '../.tmp/'),
        verbose: true,
        dry: false
      }),
      new CopyWebpackPlugin(
        [
          {
            from: path.resolve(__dirname, '../assets/js'),
            to: path.resolve(__dirname, '../.tmp/public/js')
          },
          {
            from: 'assets/js/dependencies',
            to: 'dependencies',
            force: true
          }
        ]
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
