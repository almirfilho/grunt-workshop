module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      files: {
        expand: true,
        cwd: 'src/',
        src: ['**/*', '!styles/*.less'],
        dest: 'build/'
      }
    },

    watch: {
      files: ['src/**/*'],
      tasks: ['newer:copy', 'newer:less']
    },

    less: {
      dev: {
        options: {
          compress: true
        },
        files: {
          'build/styles/custom.css': ['src/styles/custom.less']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-newer');
};
