// Increments the version number, etc.
module.exports = {
  options: {
    files: [
      'bower.json',
      'package.json'
    ],
    updateConfigs: [],
    commit: true,
    commitMessage: 'Release v%VERSION%',
    commitFiles: ['package.json'],
    createTag: true,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION%',
    push: true,
    pushTo: 'origin',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
    globalReplace: false
  }
};
