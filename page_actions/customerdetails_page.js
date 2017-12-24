require('../utilities/customlocators.js');
var BankMgrHomeLocators = require('../json/locators.json').BankMgrHomePage;

var customerdetails_page = function () {
    this.addCustomerInfo = function (fname, lname, postcode) {
        element(by.ngClick(BankMgrHomeLocators.Add_Cust_Btn_ngClick)).click();
        element(by.model(BankMgrHomeLocators.FirstName_ngModel)).sendKeys(fname);
        element(by.model(BankMgrHomeLocators.LastName_ngModel)).sendKeys(lname);
        element(by.model(BankMgrHomeLocators.PostCode_ngModel)).sendKeys(postcode);
        element(by.css(BankMgrHomeLocators.AddCust_Btn_css)).click();
    }
    // this.openAnAccount = function (customer, currency) {
    //     element(by.ngClick(BankMgrHomeLocators.Open_Acc_ngClick)).click();
    //     element();
    // }
    this.goToSearchCustomer = function () {

    }
    this.validateCustomerRecords = function () {

    }
};
module.exports = new customerdetails_page();