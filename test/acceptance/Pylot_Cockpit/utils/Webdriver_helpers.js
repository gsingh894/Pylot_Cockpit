const Helper = codecept_helper;
class Webdriver_helpers extends Helper {

  // before/after hooks
  _before() {
    // var should = require('should');
    // global.should = should;
    var chai = require('chai');
    var expect = chai.expect;
    global.expect = expect;
    var assert = chai.assert;
    global.assert = assert;
    var chalk = require('chalk');
    global.green = chalk.green;
    global.red = chalk.red;
    global.yellow = chalk.yellow;
    global.blue = chalk.blue;
  }

   async isVisible(Locator, timeout) {
    const helper = this.helpers['WebDriverIO'] // Or change to another Helper
    try {
      // const el =  await this.helpers.WebDriver._locate(Locator, false);
      // isDisplayed = (await el[0].isDisplayed());
      let checkVisiblty =   await helper.grabNumberOfVisibleElements(Locator, timeout);
      if(checkVisiblty == true){
        console.log('isVisible is a function : '+checkVisiblty);
        return checkVisiblty;
      }
      else{
        console.log('isVisible is NOT a function');
        return false;
      }
    } 
    catch (err) { console.log('No alert came.');
  return false; }
  }

  
  async waitForLocatorVisible(Locator, timeout) {
    const helper = this.helpers['WebdriverIO']; // Or change to another Helper
    try {
      await helper.waitForVisible(Locator, timeout);
      return true;
    } catch (err) { console.log('No alert came.'); }
  }

  async LocatorDisplayed(Locator, Loc1) {
    const helper = this.helpers['WebdriverIO']; 
    try {
      const a = await helper.seeElement(Locator, 10);
      if(a){
        return helper.click(Loc1);
      }
    }
    catch (err) {
      console.log(Locator+' was NOT visible so skipping it!')
    }
  }

  async clickOnEnable(Locator, timeout) {
    const helper = this.helpers['WebdriverIO']; // Or change to another Helper
    try {
      helper.waitForEnabled(Locator, timeout);
      helper.click(Locator);
    } catch (err) { }
  }

  async clickOnLocatorVisible(Locator, timeout) {
    const helper = this.helpers['WebdriverIO']; // Or change to another Helper
    try {
      helper.waitForElement(Locator, timeout);
      helper.seeElement(Locator);
      helper.click(Locator);
    } catch (err) { }
  }

  //   _after(test) {
  //     if (test.passed) {
  //       console.log(yellow(`Finished test "${test.parent} - ${test.title}"`));
  //       return;
  //   }
  //   else {
  //       var timestamp = new Date().toLocaleString('iso', {
  //           year: 'numeric',
  //           month: '2-digit',
  //           day: '2-digit',
  //           hour: '2-digit',
  //           minute: '2-digit',
  //           hour12: false
  //       }).replace(/[/]/g, '_').replace(':', '-');
  //       timestamp = timestamp.substring(0, 22);
  //       var filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
  //       filename = filename.substring(0, 10);
  //       var filePath = './ScreenShots/' + filename + '_' + timestamp + '.png';
  //       browser.saveScreenshot(filePath);
  //       console.log(yellow(`Finished test "${test.parent} - ${test.title}"`));
  //   }
  // }
}

module.exports = Webdriver_helpers;

