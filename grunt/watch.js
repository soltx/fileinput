// Watches files for changes and runs tasks based on the changed files
module.exports = {
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },
  js: {
    files: ['<%= config.src %>/scripts/{,*/}*.js'],
    tasks: ['jshint'],
    options: {
      livereload: true
    }
  },
  jstest: {
    files: ['test/spec/{,*/}*.js'],
    tasks: ['test:watch']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  },
  sass: {
    files: [
      '<%= config.src %>/styles/{,*/}*.{scss,sass}',
      '<%= config.dist %>/fileinput.scss'
    ],
    tasks: ['sass:server', 'autoprefixer']
  },
  styles: {
    files: ['<%= config.src %>/styles/{,*/}*.css'],
    tasks: ['newer:copy:styles', 'autoprefixer']
  },
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [
      '<%= config.src %>/{,*/}*.html',
      '.tmp/styles/{,*/}*.css',
      '<%= config.src %>/images/{,*/}*'
    ]
  }
};
