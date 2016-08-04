'use strict';

const generators = require('yeoman-generator');
const path = require('path');

const Base = generators.Base;

module.exports = Base.extend({
  initializing: function () {
    const currentDate = new Date();

    this.name = path.basename(this.destinationRoot());
    this.year = currentDate.getFullYear();
  },

  configuring: {
    static: function () {
      const files = ['AUTHORS'];
      const dotFiles = ['eslintrc', 'gitignore'];

      for (const file of files) {
        this.fs.copy(
          this.templatePath(file),
          this.destinationPath(file)
        );
      }

      for (const file of dotFiles) {
        this.fs.copy(
          this.templatePath(file),
          this.destinationPath(`.${file}`)
        );
      }
    },

    templates: function () {
      const files = ['CHANGELOG.md', 'LICENSE', 'README.md'];

      for (const file of files) {
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath(file),
          this
        );
      }
    }
  }
});
