'use strict';

module.exports = function(grunt) {
  const path = require('path');
  require('time-grunt')(grunt);

  // Initial config
  const config = {
    src: 'app',
    dist: 'dist',
    tmp: '.tmp',
    banner:
      '\n' +
      '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * \n' +
      ' * <%= pkg.url %>\n' +
      ' * @author <%= pkg.author %>\n' +
      ' * @version <%= pkg.version %>:build<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' */\n\n',
  };

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/custom',
    },
    data: {
      pkg: grunt.file.readJSON('package.json'),
      config, // accessible with '<%= foo %>'
    },
  });
};
