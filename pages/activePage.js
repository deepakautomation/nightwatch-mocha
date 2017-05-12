var action = require('../commands/actionDriver.js')
var OR = require('../json/OR.json')

var clickActive = function (browser) {


    browser.click(OR.locators.activePage.activeBtn);
    action.verifyElementPresent(browser, OR.locators.activePage.verifyUnchecked);
    return browser;
}
module.exports = {
    clickActive
}