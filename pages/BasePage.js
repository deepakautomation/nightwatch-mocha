var action = require('../commands/actionDriver.js')
var OR = require('../json/OR.json')
var navigateToURL = function (browser) {
    browser
        .windowMaximize()
        .url(OR.testsiteurl)
    return browser;
}


var enterToDo = function (browser, text) {

    action.typeAndPressEnter(browser, OR.locators.BasePage.ToDoField, text);
    return browser;
}

var clickCheckBox = function (browser) {

    var xpath_begin = OR.locators.BasePage.CheckBox_1;
    var xpath_end = OR.locators.BasePage.CheckBox_2;
    for (var i = 1; i < 3; i++) {
        browser.click(xpath_begin + i + xpath_end);
    }
    return browser;
}


var clickActive = function (browser) {


    browser.click(OR.locators.BasePage.ActiveBtn);

    return browser;
}
module.exports = {
    navigateToURL,
    enterToDo,
    clickCheckBox,
    clickActive
}