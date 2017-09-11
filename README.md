# qpp-submissions-schema

## Quality Payment Program Submissions Schema

This repository hosts the submissions schema for QPP and supports functionality to import
the schema as an NPM module. QPP submissions are described in more detail
[here](https://cmsgov.github.io/qpp-submissions-docs).

The QPP Submissions API accepts both JSON and XML. Schemas for both data formats
are available in this repository under [/schemas](https://github.com/CMSgov/qpp-submissions-schema/tree/master/schemas).

### Importing the qpp-submissions-schema module
The module can be used with the following pattern:
```javascript
var qppSubmissionsSchema = require('qpp-submissions-schema');
var jsonSchema = qppSubmissionsSchema.getJsonSchema();
var xmlSchema = qppMeasuresData.getXmlSchema();
```

## How to contribute to qpp-submissions-schema

### Setup
Run:
```
npm install
```

### Testing

When making changes to qpp-submissions-schema, include tests in the tests directory and make sure existing tests still pass using:

```
npm run test
```
