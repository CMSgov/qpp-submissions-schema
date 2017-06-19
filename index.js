// Libraries
var fs = require('fs');
var path = require('path');
var YAML = require('yamljs');

exports.getXmlSchema = function() {
  return fs.readFileSync(path.join(__dirname, 'schemas', 'submissions.xsd'), 'utf8');
};

exports.getJsonSchema = function() {
  return YAML.load(path.join(__dirname, 'schemas', 'submissions.yaml'));
};
