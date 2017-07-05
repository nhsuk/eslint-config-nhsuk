const CLIEngine = require('eslint').CLIEngine;
const chai = require('chai');
const rules = require('../index');

const expect = chai.expect;

describe('the ruleset exported from index.js', () => {
  it('should not flag any errors or warnings when linting the code base', () => {
    const cli = new CLIEngine(rules);

    const report = cli.executeOnFiles(['.']);

    expect(report.errorCount).to.be.equal(0);
    expect(report.warningCount).to.be.equal(0);
  });
});
