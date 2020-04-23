module.exports = function(wallaby) {
  return {
    files: [
      'lib/**/*.ts',
    ],
    tests: [
      'test/**/test-*.ts',
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript()
    },
    testFramework: 'ava',
    debug: false,
  }
}
