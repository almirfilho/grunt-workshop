module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      files: {
        expand: true,
        cwd: 'src/',
        src: ['**/*', '!styles/*.less', '!*.less', '!*.html'],
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
    },

    concat: {
      dist: {
        src: ['src/scripts/*.js'],
        dest: 'build/scripts/all.js',
      },
    },

    uglify: {
      dist: {
        files: {
          'build/scripts/all.min.js': ['src/scripts/*.js']
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8001,
          base: 'build',
          keepalive: true
        }
      }
    },

    concurrent: {
      dev: {
        tasks: ['watch', 'connect'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['*.html'],
            dest: 'build/'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
