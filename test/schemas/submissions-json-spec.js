const _ = require('lodash');
const Ajv = require('ajv');
const assert = require('chai').assert;
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ajv = Ajv();
const submissionJson = require('../data/submission');

describe('submissions JSON schema', function() {
  const submissionYaml = yaml.load(fs.readFileSync(path.join(__dirname, '../../schemas', 'submissions.yaml'), 'utf8'));

  it('should validate conforming JSON', function() {
    const valid = ajv.validate(submissionYaml, submissionJson);

    assert.isTrue(valid);
  });

  it('should validate malformed JSON', function() {
    const malformedJson = _.omit(submissionJson, 'performanceYear');
    const valid = ajv.validate(submissionYaml, malformedJson);

    assert.isFalse(valid);
    assert.isTrue(ajv.errorsText().includes('performanceYear'));
  });
});
