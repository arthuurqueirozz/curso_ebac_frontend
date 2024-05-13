module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
        development: {
          options: {
            paths: ['dev/styles']
          },
          files: {
            'dist/styles/main.css': 'dev/styles/main.less' 
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'dist/scripts/main.min.js': 'dev/scripts/main.js'
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  
  };
  