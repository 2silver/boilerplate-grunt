module.exports = {
  target: {
    tasks: [['sass', 'postcss', 'stylelint']],
    options: {
      logConcurrentOutput: true,
    },
  },
};

// use npm-run-all --parallel
