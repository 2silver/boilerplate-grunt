module.exports = {
  target: {
    tasks: [['sass', 'postcss']],
    options: {
      logConcurrentOutput: true,
    },
  },
};

// use npm-run-all --parallel
