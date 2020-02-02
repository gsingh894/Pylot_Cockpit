const I = actor();
const CONFIG = require('../../../../codecept.conf');
const locators = require('../ObjectRepo/LocatorsList');
module.exports = {

    uri: {
        homePage: '/s/fresh/us/home',
        // simpleProductDetailPage: '/s/RefArch/upright-case-33l-3.7kg/P0150M.html?lang=en_US'
    },

    fetchAttr: async(locator, attrVal) => {
        await I.waitForElement(locator);
        const Value = await I.grabAttributeFrom(locator, attrVal);
        I.say('Fetched Value is : '+Value);
        return Value ? Value.toString() : '';
    },

  closePopup: async (locators, loc1) => {
    var b = false;
    b = await within({xpath : './/div[@class="bx-align"]'}, () => {
      return I.grabNumberOfVisibleElements(locators, 10);
    });
    I.say('HomePage Popup val is :' + b);
    if (b == 1) {
      I.click(loc1);
      I.say('Home Page Pop up came, and rejected it.');
      return true;
    }
    else {
      I.say('No Home Page Pop up came.');
    }
  },

    fetchText: async(locator) => {
        await I.waitForElement(locator);
        const Value = await I.grabTextFrom(locator);
        I.say('Fetched Text from ('+locator+') is : '+Value);
        return Value ? Value.toString() : '';
    },

    fetchTitle: async() => {
        const title = await I.grabTitle();
        I.say(blue('Page title is : '+title));
        return title;
    },

    chckImagePresent:(Selector,tagNme,Val) => {
        within(Selector, () => {
            locate(tagNme)
            .withAttr({ 'src':Val });
        }) 
    },

    chckURLPresent:(Selector,tagNme,Val) => {
        within(Selector, () => {
            locate(tagNme)
            .withAttr({ 'href':Val });
        })
    },

    waitForLocatorVisible : async(textOrLocator) => {
        try {
          await I.waitForElement(textOrLocator);
          return true;
        } catch (err) { // Do nothing
        }
      },

      LocatorPresent(Locator) {
        try {
          I.seeElement(Locator);
          return true;
        } catch (err) {  }
      },

      clickOnEnable(locator){
        I.waitForEnabled(locator,10);
        I.click(locator);
      },

      passValueOnLocVisble(locator, val){
        I.waitForElement(locator,10);
        I.fillField(locator, val);
        I.wait(0.5);
      },

    takeScreenShot(Name){
        I.saveScreenshot(Name+'.png');
    },

  fetchDataTableVal(table) {
    outer:
    for (const id in table.rows) {
      // if (id < 1) { continue; // skip a header of a table }
      const cells = table.rows[id].cells;       // go by row cells
      for (const s in cells) {
        var a = parseInt(s, 10) + 1;
        var b = '('+locators.dynamicInput +')[' + a + ']';
        I.fillField(b, cells[s].value);
        if(a == 4){
          break outer;
        }
      }
    }
    I.click(locators.checkBox);
    I.say('Filled the details in form fields');
  },

  feedBackPopup: async () => {
    var b = 0;
    b = await I.grabNumberOfVisibleElements(locators.febckInvite, 2);
    I.say('Feedback popup val is :' + b);
    if (b == 1) {
      I.click(locators.febckDecline);
      I.say('Feedback alert came and rejected it');
    }
    else { I.say('No feedback alert came.'); }
  },

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
},



}
