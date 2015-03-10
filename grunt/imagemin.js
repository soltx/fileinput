// The following *-min tasks produce minified files in the docs folder
module.exports = {
  docs: {
    files: [{
      expand: true,
      cwd: '<%= config.src %>/images',
      src: '{,*/}*.{gif,jpeg,jpg,png}',
      dest: '<%= config.src %>/images'
    }]
  }
};
