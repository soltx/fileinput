// Empties folders to start fresh
module.exports = {
  docs: {
    files: [{
      dot: true,
      src: [
        '.tmp',
        '<%= config.docs %>/*',
        '!<%= config.docs %>/.git*'
      ]
    }]
  },
  server: '.tmp'
};
