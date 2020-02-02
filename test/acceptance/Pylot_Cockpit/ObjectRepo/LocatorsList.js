module.exports = {
        
        //--------------------------------Login Page----------------------------------------------------
        //  using strict locator eg.. {xpath : ''};
        registration  : {id : 'signup'},
        loginForm  : {id:  'kc-form'},
        dynamicInput : './/div[@id="kc-form"]//input',
        firstName : {id : 'firstName'},
        lastName : {id : 'lastName'},
        passWord :  './/input[@id="password"]',
        emailId : {id : 'email'},
        submitLogin : {id : 'kc-submit'},
        checkBox : {id : 'formTermsConsent'},
        loggedIn : './/button[@aria-controls="menu-list-grow"]',
        errorCame : './/div[@class="notification notification--error"]//p'
        
}