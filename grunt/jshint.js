// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    '<%= config.src %>/scripts/{,*/}*.js',
    '!<%= config.src %>/scripts/vendor/*',
    'test/spec/{,*/}*.js'
  ]
};
