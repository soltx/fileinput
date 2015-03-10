// Automatically inject Bower components into the HTML file
module.exports = {
  src: {
    src: ['<%= config.src %>/index.html'],
    ignorePath: /^\/|\.\.\//,
    exclude: ['bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js'],
    devDependencies: true,
    overrides: {
      'fileinput': {
        main: [
          '../../dist/fileinput.js'
        ]
      }
    }
  },
  sass: {
    src: ['<%= config.src %>/styles/{,*/}*.{scss,sass}'],
    ignorePath: /(\.\.\/){1,2}bower_components\//,
    devDependencies: true,
    overrides: {
      'fileinput': {
        main: [
          '../../dist/fileinput.scss'
        ]
      },
      'assemble-syntax': {
        main: [
          './styles/bootstrap.scss'
        ]
      }
    }
  }
};
