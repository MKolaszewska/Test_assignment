const  path = require('path');

const androidOptions = Object.assign(
  {
    capabilities: {
         platformName: 'Android',
         'appium:automationName': 'UiAutomator2',
         'appium:app': path.join(process.cwd(), './app/Calculator.apk')
        },
    host: 'localhost',
    port: 4723,
    path: '/wd/hub'
  }
  );

module.exports = {
  androidOptions
};