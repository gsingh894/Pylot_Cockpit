var RELATIVE_PATH = './test/acceptance/';
var OUTPUT_PATH = './reports/Pylot_Cockpit/';
var HOST = 'https://sandbox.cockpit.pylot.de/';

var WebDriverIO = {
    "url": HOST,
    "browser": "chrome",
    "desiredCapabilities": {
      "chromeOptions": {
        "args": ['start-maximized', '--disable-extension', 'disable-infobars'],
        "excludeSwitches": ['enable-automation'],
      }
    },
    restart: true,
    smartWait: 1000,
    waitForTimeout:30000,
    waitforInterval: 250,
    timeouts: {
        script: 20000,
        'page load': 60000
    },
    logLevel: 'silent',
    sync: true,
    coloredLogs: true,
  }

exports.config = {

    output: OUTPUT_PATH,
    helpers: {
        WebDriver: WebDriverIO,
       myCustomerHelper:{
            require : './test/acceptance/Pylot_Cockpit/utils/Webdriver_helpers.js'
        }
    },

    plugins: {
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        },

        // retryFailedStep: {
        //     enabled: true,
        //     retries: 1
        // },

        allure: {
            enabled: true
        },
    },
    
    include: {
        LoginFile: RELATIVE_PATH + 'Pylot_Cockpit/pages/LoginPage.js',
    },

    gherkin: {
        features: RELATIVE_PATH + 'Pylot_Cockpit/features/Login/login.feature',
        steps: [
            RELATIVE_PATH + 'Pylot_Cockpit/steps/LoginStep',
        ],
    },
    name: 'SFRA',
    bootstrap: null,
    teardown: null,
};
