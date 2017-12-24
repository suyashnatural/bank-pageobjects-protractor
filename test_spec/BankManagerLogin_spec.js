describe('Bank Manager Login Test - ', function () {
    var homepage = require('../page_actions/home_page.js');
    var basepage = require('../page_actions/base_page.js');
    var locators = require('../json/locators.json');
    var data = require('../json/data.json');
    var logger = require('../utilities/log');
    var BankMgrData = require('../json/data.json').BankMgrHomePage;
    require('../page_actions/customerdetails_page');


    var customerdetails_page; //for reference

    it('should login as bank manager', function () {
        basepage.navigateToUrl(locators.URL.loginPageURL);
        logger.log('info', 'navigated to url: ' + locators.URL.loginPageURL);

        customerdetails_page = homepage.loginAsBankManager();
        logger.log('info', 'creating the reference of customer details page');

        var title = basepage.getPageTitle();
        expect(title).toContain(data.LoginPage.Page_Title_Text);
        logger.log('info', 'validating the page title to contain: ' + data.LoginPage.Page_Title_Text);
        browser.sleep(2000);
    });

    it('should add a customer', function () {
        customerdetails_page.addCustomerInfo(BankMgrData.FirstName, BankMgrData.LastName, BankMgrData.PostCode);
        logger.log('info', 'customer info added');

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 5000);
        logger.log('info', 'alert present');

        var alert = browser.switchTo().alert();
            alert.getText().then(function(alertText){
            logger.log('info', alertText);
        });
        alert.accept();
        logger.log('info', 'alert accepted');
    });

    it('should open an account', function () {
        
    });
});