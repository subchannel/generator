'use strict';

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

describe('generator-subchannel app-generator', function () {
  const files = ['.eslintrc', '.gitignore', 'AUTHORS', 'CHANGELOG.md',
    'LICENSE', 'README.md'];

  beforeAll(function () {
    const generator = path.join(__dirname, '../../generators/app');

    return helpers.run(generator)
      .toPromise();
  });

  for (const file of files) {
    it(`generates ${file}`, function () {
      assert.file(file);
    });
  }
});
