'use strict';

// The actual grunt server settings
module.exports = {
  options: {
    port: 9000,
    open: true,
    livereload: 35729,
    // Change this to '0.0.0.0' to access the server from outside
    hostname: 'localhost'
  },
  livereload: {
    options: {
      middleware: function(connect) {
        return [
          connect.static('.tmp'),
          connect().use('/bower_components', connect.static('./bower_components')),
          connect().use('/dist', connect.static('./dist')),
          connect.static('src')
        ];
      }
    }
  },
  test: {
    options: {
      open: false,
      port: 9001,
      middleware: function(connect) {
        return [
          connect.static('.tmp'),
          connect.static('test'),
          connect().use('/bower_components', connect.static('./bower_components')),
          connect.static('src')
        ];
      }
    }
  },
  docs: {
    options: {
      base: '<%= config.docs %>',
      livereload: false
    }
  }
};
