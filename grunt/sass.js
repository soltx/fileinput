// Compiles Sass to CSS and generates necessary files if requested
module.exports = {
  options: {
    sourceMap: true,
    includePaths: ['bower_components']
  },
  docs: {
    files: [{
      expand: true,
      cwd: '<%= config.src %>/styles',
      src: ['*.{scss,sass}'],
      dest: '.tmp/styles',
      ext: '.css'
    }]
  },
  server: {
    files: [{
      expand: true,
      cwd: '<%= config.src %>/styles',
      src: ['*.{scss,sass}'],
      dest: '.tmp/styles',
      ext: '.css'
    }]
  },
  dist: {
    options: {
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: '<%= config.dist %>',
      src: ['fileinput.scss'],
      dest: '<%= config.dist %>',
      ext: '.css'
    }]
  }
};
