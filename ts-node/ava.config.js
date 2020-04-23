export default {
  files: [
    "test/**/test-*.ts",
    "!test/mock",
  ],
  ignoredByWatcher: ['coverage/**', 'dist/**', '.vscode/**', '.nyc_output.nosync/**', "node_modules.nosync/**"],
  extensions: [ "ts" ],
  require: [ "ts-node/register"],
  cache: true,
  concurrency: 5,
  failFast: true,
  failWithoutAssertions: true,
  tap: false,
  verbose: false,
}
