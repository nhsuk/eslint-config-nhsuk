const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');
const rules = require('../.eslintrc');

const expect = chai.expect;

describe('the ruleset exported from index.js', () => {
  it('should not flag any errors or warnings when linting the code base', () => {
    rules.ignorePattern = '!.eslintrc.js';
    const cli = new CLIEngine(rules);

    const report = cli.executeOnFiles(['.']);

    const errors = report.errorCount;
    const warnings = report.warningCount;

    if (errors + warnings > 0) {
      const formatter = cli.getFormatter();
      // eslint-disable-next-line no-console
      console.log(formatter(report.results));
    }

    expect(errors).to.be.equal(0);
    expect(warnings).to.be.equal(0);
  });
});
