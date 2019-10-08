const { CLIEngine } = require('eslint');
const chai = require('chai');
const rules = require('../.eslintrc');

const { expect } = chai;

describe('the ruleset exported from index.js', () => {
  it('should not flag any errors or warnings when linting the code base', () => {
    rules.ignorePattern = '!.eslintrc.js';
    const cli = new CLIEngine(rules);

    const report = cli.executeOnFiles(['.']);

    const { errorCount, warningCount } = report;

    if (errorCount + warningCount > 0) {
      const formatter = cli.getFormatter();
      // eslint-disable-next-line no-console
      console.error(formatter(report.results));
    }

    expect(errorCount).to.be.equal(0);
    expect(warningCount).to.be.equal(0);
  });
});
