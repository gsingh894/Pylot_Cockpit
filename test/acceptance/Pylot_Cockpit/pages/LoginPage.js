const I = actor();
const  locators  = require('../ObjectRepo/LocatorsList');
const Utils = require('../utils/uriUtils');

var flag;
module.exports = {
     reachToRegistrationPage(){
         I.waitForVisible(locators.loginForm);
         I.seeElement(locators.loginForm)
         I.waitForVisible(locators.registration);
         I.click(locators.registration);
         I.say('Reached Registration Page'); 
      },

    focusInElemnts() {
        var arr = [locators.firstName, locators.lastName, locators.emailId, locators.passWord, locators.checkBox]
        for (var i = 0; i < arr.length; i++) {
            I.wait(0.5);
            I.click(arr[i]);
        }
        I.wait(2);
        I.say('Clicked on each element to check the property of the fields')
    },

      convertNamesToString(Firstname, LastName, Password, email){
        this.validateFieldsAreMandatory(Firstname, 'Firstname')
        this.validateFieldsAreMandatory(LastName, 'LastName')
        this.validateFieldsAreMandatory(Password,'Password')
        this.validateFieldsAreMandatory(email,'email')
      },

      validateFieldsAreMandatory(Fieldname, msg){
        Fieldname = Fieldname.toString();
        flag = Fieldname.includes("invalid");
        assert.equal(flag, true, 'Fields are not mandatory');
        I.say(msg + ' field is mandatory, cannot be blank');
      },
      
      checkLengthOfnames(Firstname, LastName){
        Firstname = Firstname.toString().length;
        LastName = LastName.toString().length;
        if(Firstname > 3 && LastName > 3){  I.say('FirstName and Lastname length is greater than 3');  }
        else{ I.say('FirstName and Lastname length is less than 3'); }
      },

    nowLoggedIn(submitBtn) {
        submitBtn = submitBtn.toString();
        I.say('submitBtn val is  :' + submitBtn);
        if (submitBtn == '') {
            I.say('Submit Button is Now Enabled');
            I.click(locators.submitLogin);
        }
        else{
            I.say('Sumbmit button disabled')
        }
    },

    userAlreadyRegistered(errorMsg){
        if(errorMsg>0){
            I.say('regsitration failed as user is already registered, Kindly change the test data')
        }
    }
     
}