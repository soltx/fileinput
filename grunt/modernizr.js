// Generates a custom Modernizr build that includes only the tests you
// reference in app
module.exports = {
  docs: {
    devFile: 'bower_components/modernizr/modernizr.js',
    outputFile: '<%= config.docs %>/scripts/vendor/modernizr.js',
    files: {
      src: [
        '<%= config.docs %>/scripts/{,*/}*.js',
        '<%= config.docs %>/styles/{,*/}*.css',
        '!<%= config.docs %>/scripts/vendor/*'
      ]
    },
    uglify: true
  }
};
