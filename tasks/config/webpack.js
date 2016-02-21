module.exports = function(grunt) {
  grunt.config.set('webpack', {
    bundle: {
      // webpack options
      entry: './assets/js/main.js',
      output: {
        filename: './assets/js/bundle.js',
        publicPath: "./assets/",
        library: 'main',
        //sourceMapFilename: 'main.map'
      },
      //watchers
      //watch: true,
      //watchOptions: {
      //  aggregateTimeout: 200
      //},
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
};
