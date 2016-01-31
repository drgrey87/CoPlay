module.exports = function(grunt) {

  grunt.config.set('nodemon', {
    dev: {
      script: 'app.js',
      options: {
        callback: function (nodemon) {
          nodemon.on('log', function (event) {
            console.log(event.colour);
          });

          // opens browser on initial server start
          nodemon.on('config:update', function () {
            // Delay before server listens on port
            setTimeout(function() {
              require('open')('http://localhost:1337');
            }, 1000);
          });

          // refreshes browser when server reboots
          //nodemon.on('restart', function () {console.log(1111);
          //  // Delay before server listens on port
          //  setTimeout(function() {
          //    require('fs').writeFileSync('.rebooted', 'rebooted');
          //  }, 1000);
          //});
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');
};
