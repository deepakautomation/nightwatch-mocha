var wait = 6000;

var clickElement = function (browser, loc) {
    browser.useXpath()
        .waitForElementVisible(loc, wait)
        .click(loc);
}
var typeOnElement = function (browser, loc, input) {
    browser.useXpath()
        .waitForElementVisible(loc, wait)
        .setValue(loc, input);
}


var verifyElementPresent = function (browser, loc) {
    browser.useXpath()
        .waitForElementVisible(loc, wait)
        .expect.element(loc).to.be.present;
}

var typeAndPressEnter = function (browser, loc, input) {
    browser.useXpath()
        .waitForElementVisible(loc, wait)
        .setValue(loc, [input, browser.Keys.ENTER]);
}

module.exports = {
    clickElement,
    typeOnElement,
    verifyElementPresent,
    typeAndPressEnter
}