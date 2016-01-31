module.exports = function(grunt) {
  grunt.config.set('webpack', {
    bundle: {
      // webpack options
      entry: '/home/sergey/WebstormProjects/CoPlay/assets/js/main.js',
      output: {
        path: '/home/sergey/WebstormProjects/CoPlay/assets/js/',
        filename: 'bundle.js',
      },
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
