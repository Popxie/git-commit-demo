/*
 * @Description: 官方文档： https://commitlint.js.org/#/reference-rules
 * @Author: xiehuaqiang
 * @FilePath: /git-commit-demo/commitlint.config.js
 * @Date: 2021-07-26 14:13:21
 * @LastEditTime: 2021-08-20 11:16:15
 */
const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  /*
   * Resolve and load @commitlint/format from node_modules.
   * Referenced package must be installed
   */
  formatter: '@commitlint/format',
  /* 
   * Any rules defined here will override rules from @commitlint/config-conventional  
   */
  rules: {
    // type 枚举类型
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']],
    "header-max-length": [2, "always", 94],  // 与cz-li限制保持一致
  },
  /*
   * Whether commitlint uses the default ignore rules.
   */
  defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
}

module.exports = Configuration