module.exports = function (grunt) {
  grunt.registerTask('run', [
    'webpack',
    'clean',
    'copy',
    'nodemon',
    'watch'
  ]);
};
