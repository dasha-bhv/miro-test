exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    shardTestFiles: true,
    browserName: 'chrome',
    chromeOptions: {
      w3c: false,
    },
  },
  specs: [
    'tests/*.spec.js',
  ],
};
