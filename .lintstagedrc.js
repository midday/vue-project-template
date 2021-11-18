module.exports = {
  'src/**/*.js': ['npm run lintjs', 'git add'],
  'src/**/*.less': ['npm run lintcss', 'git add'],
  'src/**/*.vue': ['npm run lintcss', 'npm run lintjs', 'git add'],
}
