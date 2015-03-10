// Automated deploy task
module.exports = {
  options: {
    dir: 'docs',
    commit: true,
    push: true,
    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
  },
  pages: {
    options: {
      remote: 'https://github.com/brunowego/fileinput.git',
      branch: 'gh-pages'
    }
  }
};
