var action = require('../commands/actionDriver.js')
var OR = require('../json/OR.json')

var clickCompleted = function (browser) {


    browser.click(OR.locators.completedPage.completedBtn);
    action.verifyElementPresent(browser, OR.locators.completedPage.verifyChecked);
    return browser;
}
module.exports = {
    clickCompleted
}