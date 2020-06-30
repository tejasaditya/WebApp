const browserStackConfig = require('./browserstack.config');

const date = new Date();
const dateForDisplay = date.toDateString();
const buildNameForDisplay = `${browserStackConfig.BUILD}: ${dateForDisplay}`;

exports.config = {
  user: browserStackConfig.BROWSERSTACK_USER,
  key: browserStackConfig.BROWSERSTACK_KEY,
  updateJob: false,
  specs: [
    './tests/browserstack/specs/%scriptNameMainTest.js',
  ],
  twitterUserName: browserStackConfig.TWITTER_USER_NAME,
  twitterPassword: browserStackConfig.TWITTER_PASSWORD,
  exclude: [],
  capabilities: [
    {
      name: '%name0',
      build: buildNameForDisplay,
      device: '%device0',
      os: '%os0',
      os_version: '%os_version0',
      app: '%app',
      browserName: '%browserName0',
      browser_version: '%browser_version0',
      real_mobile: %real_mobile,
      acceptSslCerts: %acceptSslCerts,
      'browserstack.console': 'info',
      'browserstack.debug': %browserstack.debug,
      'browserstack.appium_version': '%browserstack.appium_version0',
      'browserstack.local': %browserstack.local,
      'browser.geoLocation': '%browserstack.geoLocation',
      isAndroid: %isAndroid,
      isCordovaFromAppStore: %isCordova,
      isIOS: %isIOS,
      isMobileScreenSize: %isMobileScreenSize,
    },
    {
      name: '%name1',
      build: buildNameForDisplay,
      device: '%device1',
      os: '%os1',
      os_version: '%os_version1',
      app: '%app',
      browserName: '%browserName1',
      browser_version: '%browser_version1',
      real_mobile: %real_mobile,
      acceptSslCerts: %acceptSslCerts,
      'browserstack.console': 'info',
      'browserstack.debug': %browserstack.debug,
      'browserstack.appium_version': '%browserstack.appium_version1',
      'browserstack.local': %browserstack.local,
      'browser.geoLocation': '%browserstack.geoLocation',
      isAndroid: %isAndroid,
      isCordovaFromAppStore: %isCordova,
      isIOS: %isIOS,
      isMobileScreenSize: %isMobileScreenSize,
    },
    {
      name: '%name2',
      build: buildNameForDisplay,
      device: '%device2',
      os: '%os2',
      os_version: '%os_version2',
      app: '%app',
      browserName: '%browserName2',
      browser_version: '%browser_version2',
      real_mobile: %real_mobile,
      acceptSslCerts: %acceptSslCerts,
      'browserstack.console': 'info',
      'browserstack.debug': %browserstack.debug,
      'browserstack.appium_version': '%browserstack.appium_version2',
      'browserstack.local': %browserstack.local,
      'browser.geoLocation': '%browserstack.geoLocation',
      isAndroid: %isAndroid,
      isCordovaFromAppStore: %isCordova,
      isIOS: %isIOS,
      isMobileScreenSize: %isMobileScreenSize,
    },
    {
      name: '%name3',
      build: buildNameForDisplay,
      device: '%device3',
      os: '%os3',
      os_version: '%os_version3',
      app: '%app',
      browserName: '%browserName3',
      browser_version: '%browser_version3',
      real_mobile: %real_mobile,
      acceptSslCerts: %acceptSslCerts,
      'browserstack.console': 'info',
      'browserstack.debug': %browserstack.debug,
      'browserstack.appium_version': '%browserstack.appium_version3',
      'browserstack.local': %browserstack.local,
      'browser.geoLocation': '%browserstack.geoLocation',
      isAndroid: %isAndroid,
      isCordovaFromAppStore: %isCordova,
      isIOS: %isIOS,
      isMobileScreenSize: %isMobileScreenSize,
    },
    {
      name: '%name4',
      build: buildNameForDisplay,
      device: '%device4',
      os: '%os4',
      os_version: '%os_version4',
      app: '%app',
      browserName: '%browserName4',
      browser_version: '%browser_version4',
      real_mobile: %real_mobile,
      acceptSslCerts: %acceptSslCerts,
      'browserstack.console': 'info',
      'browserstack.debug': %browserstack.debug,
      'browserstack.appium_version': '%browserstack.appium_version4',
      'browserstack.local': %browserstack.local,
      'browser.geoLocation': '%browserstack.geoLocation',
      isAndroid: %isAndroid,
      isCordovaFromAppStore: %isCordova,
      isIOS: %isIOS,
      isMobileScreenSize: %isMobileScreenSize,
    },
  ],
  baseUrl: browserStackConfig.WEB_APP_ROOT_URL,
  waitforTimeout: %waitForTimeout,
  connectionRetryTimeout: %connectionRetryTimeout,
  connectionRetryCount: %connectionRetryCount,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: %timeout,
  },
}
