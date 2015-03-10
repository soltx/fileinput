// Renames files for browser caching purposes
module.exports = {
  docs: {
    files: {
      src: [
        '<%= config.docs %>/scripts/{,*/}*.js',
        '<%= config.docs %>/styles/{,*/}*.css',
        '<%= config.docs %>/images/{,*/}*.*',
        '<%= config.docs %>/styles/fonts/{,*/}*.*',
        '<%= config.docs %>/*.{ico,png}'
      ]
    }
  }
};
