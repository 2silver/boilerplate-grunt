module.exports = {
  options: {
    configFile: '.stylelintrc',
    formatter: 'string',
    ignoreDisables: false,
    failOnError: true,
    outputFile: '',
    reportNeedlessDisables: false,
    syntax: '',
  },
  all: ['<%= config.src %>/css/**/*.{css,scss}'],
};


// use npm script
// "css:lint"
