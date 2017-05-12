var base = require('../pages/BasePage.js');
var completed = require('../pages/completedPage.js');
var active = require('../pages/activePage.js');
var OR = require('../json/OR.json')
var logger = require('../logs/log.js')

describe("ToDo Login Test", function () {



    before(function (browser, done) {
        done();
    });

    after(function(browser, done) {
      browser.end(function() {
        done();
      });
    });


    it("Entering ToDo items", function (browser) {

        logger.log('info', 'Entering the ToDo items in the input field');

        base.navigateToURL(browser)
        base.enterToDo(browser, OR.testdata.data1)
        base.enterToDo(browser, OR.testdata.data2)
        base.enterToDo(browser, OR.testdata.data3)
        base.clickCheckBox(browser)
        
        base.clickActive(browser)
    });


    it("Verifying completed items", function (browser) {

        completed.clickCompleted(browser)


    });

    it("Verifying Active items", function (browser) {

        active.clickActive(browser)

    });

});