// Run some tasks in parallel to speed up build process
module.exports = {
  server: [
    'sass:server',
    'copy:styles'
  ],
  test: [
    'copy:styles'
  ],
  docs: [
    'sass',
    'copy:styles',
    'imagemin',
    'svgmin'
  ]
};
