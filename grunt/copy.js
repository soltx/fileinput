// Copies remaining files to places other tasks can use
module.exports = {
  docs: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= config.src %>',
      dest: '<%= config.docs %>',
      src: [
        '*.{ico,png,txt}',
        'images/{,*/}*.webp',
        '{,*/}*.html',
        'styles/fonts/{,*/}*.*',
        'CNAME'
      ]
    }, {
      src: 'node_modules/apache-server-configs/docs/.htaccess',
      dest: '<%= config.docs %>/.htaccess'
    }, {
      expand: true,
      dot: true,
      cwd: 'bower_components/font-awesome/fonts',
      src: '*',
      dest: '<%= config.docs %>/fonts'
    }]
  },
  styles: {
    expand: true,
    dot: true,
    cwd: '<%= config.src %>/styles',
    dest: '.tmp/styles/',
    src: '{,*/}*.css'
  }
};
