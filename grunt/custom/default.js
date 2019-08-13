module.exports = function(grunt) {
  grunt.registerTask('default', ['concurrent', 'nunjucks', 'eslint']);
};

// module.exports = function(grunt) {
//   grunt.registerTask('default', function() {
//     grunt.log.ok('custom3!');
//   });
// };
