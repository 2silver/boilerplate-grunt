module.exports = function(grunt) {
  grunt.registerTask('dev', ['concurrent', 'nunjucks', 'eslint', 'connect', 'watch']);
};
