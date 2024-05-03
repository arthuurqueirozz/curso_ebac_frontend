module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            paths: ['less'] 
          },
          files: {
            'css/styles.css': 'less/styles.less' 
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'js/scripts.min.js': ['js/*.js'] 
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  
  };
  