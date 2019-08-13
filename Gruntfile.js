'use strict';

const timeGrunt = require('time-grunt');
const loadConfig = require('load-grunt-config');
const path = require('path');
// const jitGrunt = require('jit-grunt')

module.exports = function(grunt) {
  // Track execution time
  timeGrunt(grunt);

  // Initial config
  const config = {
    pkg: grunt.file.readJSON(path.join(process.cwd(), 'package.json')),
    src: 'app',
    dist: 'dist',
    tmp: '.tmp',
    current_year: '<%= grunt.template.today("yyyy") %>',
    banner:
      '\n' +
      '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * \n' +
      ' * <%= pkg.url %>\n' +
      ' * @author <%= pkg.author %>\n' +
      ' * @version <%= pkg.version %>:build<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' */\n\n',
    env: process.env,
  };

  // Load grunt tasks automatically
  // grunt.initConfig(config);

  // Define the configuration for all the tasks
  loadConfig(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    packageJsonPath: path.join(process.cwd(), 'package.json'),
    init: true,
    jitGrunt: {
      customTasksDir: 'grunt/custom',
      staticMappings: {
        nunjucks: 'grunt-nunjucks-2-html',
        sprite: 'grunt-spritesmith',
        'webpack-dev-server': 'grunt-webpack',
      },
    },
    data: {
      // pkg: grunt.file.readJSON('package.json'),
      config, // accessible with ex. '<%= current_year %>'
    },
  });
};
