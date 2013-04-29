/*
 * grunt-debugger-proof
 * https://github.com/johnkpaul/grunt-debugger-proof
 *
 * Copyright (c) 2013 John K. Paul
 * Licensed under the MIT license.
 */

'use strict';

var addEvalToSource = require('add-eval-to-source');

module.exports = function(grunt) {


  grunt.registerMultiTask('debugger_proof', 'Your task description goes here.', function() {

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return {filepath: filepath, source: grunt.file.read(filepath)};
      }).map(function(descriptor) {
        grunt.file.write(f.dest+'/'+ descriptor.filepath, addEvalToSource(descriptor.source));
        grunt.log.writeln('File "' + f.dest+'/'+ descriptor.filepath + '" created.');
      });

      // Print a success message.
    });
  });

};
