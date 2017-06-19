const _ = require('lodash');
const assert = require('chai').assert;
const fs = require('fs');
const libXml = require('libxmljs');
const path = require('path');

describe('submissions XML schema', function() {
  let submissionXsd;
  let submissionXml;

  beforeEach(function() {
    submissionXsd = libXml.parseXml(
      fs.readFileSync(path.join(__dirname, '../../schemas', 'submissions.xsd'), 'utf8')
    );
    submissionXml = libXml.parseXml(
      fs.readFileSync(path.join(__dirname, '../data', 'submission.xml'), 'utf8')
    );
  });

  it('should validate conforming XML', function() {
    const valid = submissionXml.validate(submissionXsd);
    assert.isTrue(valid);
  });

  it('should validate malformed XML', function() {
    submissionXml.root().get('performanceYear').remove()
    const valid = submissionXml.validate(submissionXsd);

    assert.isFalse(valid);
    assert.isTrue(submissionXml.validationErrors[0].message.includes('performanceYear'));
  });
});
