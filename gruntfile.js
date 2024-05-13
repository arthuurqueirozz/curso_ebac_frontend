module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
        development: {
          files: {
            'css/styles.css': 'less/styles.less' 
          },
          options: {
            compress: true
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'js/scripts.min.js': 'dev/scripts/main.js'
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  
  };
  