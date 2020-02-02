const { I } = inject();
const CONFIG = require('../../../../codecept.conf');
const TD = require('../TestData/testData');
const locators = require('../ObjectRepo/LocatorsList');
const loginPge = require('../pages/LoginPage');
const Utils = require('../utils/uriUtils');
var Firstname, LastName, password, email, submitBtn;

Given('User lands on registration page.', () => {
    I.say('CONFIG.helpers.WebDriver.url is : ' + CONFIG.config.helpers.WebDriver.url);
    I.amOnPage(CONFIG.config.helpers.WebDriver.url);
    loginPge.reachToRegistrationPage();
});

When('User checks the mandatory fields to login.', async() => {
    loginPge.focusInElemnts();
    Firstname = await I.grabAttributeFrom(locators.firstName, 'class');
    LastName = await I.grabAttributeFrom(locators.lastName, 'class');
    password = await I.grabAttributeFrom(locators.passWord, 'class');
    email = await I.grabAttributeFrom(locators.emailId, 'class');
    
})

Then('User see firstname, lastname, email and password as mandatory fields.', () => {
    loginPge.convertNamesToString(Firstname, LastName, password, email);
})

When('User checks the login button', async() => {
    submitBtn = await I.grabAttributeFrom(locators.submitLogin, 'disabled')
})

Then('By default login button should be disabled', () => {
    assert.equal(submitBtn, 'true', 'Submit Button got enabled');
    I.say('Submit Button is disabled')
})

When('User fills the invalid data in login form', async(table) => {
    Utils.fetchDataTableVal(table);
})

Then('Login button should be disabled.', async() => {
    submitBtn = await I.grabAttributeFrom(locators.submitLogin, 'disabled');
    I.say('submitBtn val is  :'+submitBtn);
    if(submitBtn == ''){   I.say('Submit Button is NOT disabled on entering Invalid data');  }
    else{  assert.equal(submitBtn, 'true', 'Submit Button got enabled');
    I.say('Submit Button is disabled') }
})

When('User fills the firstname, lastname, email and password', (table) => {
    Utils.fetchDataTableVal(table);
})

Then('Username and password length should be more than 3 characters', async() => {
    Firstname = await I.grabTextFrom(locators.firstName); 
    LastName = await I.grabTextFrom(locators.lastName);
    loginPge.checkLengthOfnames(Firstname, LastName);
})

When('Login button should be enabled', async() => {
    submitBtn = await I.grabAttributeFrom(locators.submitLogin, 'disabled');
    loginPge.nowLoggedIn(submitBtn);
    logedIn = await I.grabNumberOfVisibleElements(locators.loggedIn, 10);
    if (logedIn > 0) {
        I.waitForVisible(locators.loggedIn);
        I.say('Registration Successfull');
    }
    else {
        errorMsg = await I.grabNumberOfVisibleElements(locators.errorCame, 4);
        loginPge.userAlreadyRegistered(errorMsg);
    }
    
})

