// Libraries
var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

exports.getXmlSchema = function() {
  return fs.readFileSync(path.join(__dirname, 'schemas', 'submissions.xsd'), 'utf8');
};

exports.getJsonSchema = function() {
  return yaml.load(fs.readFileSync(path.join(__dirname, 'schemas', 'submissions.yaml'), 'utf8'));
};
