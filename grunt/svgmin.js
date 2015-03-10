module.exports = {
  docs: {
    files: [{
      expand: true,
      cwd: '<%= config.src %>/images',
      src: '{,*/}*.svg',
      dest: '<%= config.docs %>/images'
    }]
  }
};
