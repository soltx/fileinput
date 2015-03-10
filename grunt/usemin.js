// Performs rewrites based on rev and the useminPrepare configuration
module.exports = {
  options: {
    assetsDirs: [
      '<%= config.docs %>',
      '<%= config.docs %>/images',
      '<%= config.docs %>/styles'
    ]
  },
  html: ['<%= config.docs %>/{,*/}*.html'],
  css: ['<%= config.docs %>/styles/{,*/}*.css']
};
