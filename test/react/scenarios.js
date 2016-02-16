(function() {
  'use strict';

  describe('navigator', function() {
    var path = '/test/react/index.html';
    var EC = protractor.ExpectedConditions;

    browser.driver.ignoreSynchronization = true;

    it('should exist', function() {
      browser.driver.sleep(1000);
      // var navi = browser.driver.findElement(by.tagName('ons-navigator'));
      // browser.wait(EC.presenceOf(navi));
      // expect(navi.isDisplayed()).toBeTruthy();
    });

    // describe('page pushing', function () {
    //   it('should switch page when a button is clicked', function() {
    //     var page1 = element(by.id('page1'));
    //     var page2 = element(by.id('page2'));
    //     var status = element(by.id('status'));
    //
    //     expect(status.getText()).toBe('init');
    //
    //     element(by.id('btn1')).click();
    //     browser.wait(EC.visibilityOf(page2));
    //     browser.wait(EC.invisibilityOf(page1));
    //
    //     // Check that page2 was created and that it's displayed.
    //     expect((page2).isDisplayed()).toBeTruthy();
    //     expect((page1).isDisplayed()).not.toBeTruthy();
    //     expect((page1).isPresent()).toBeTruthy();
    //
    //     element(by.id('btn2')).click();
    //     browser.wait(EC.stalenessOf(page2));
    //
    //     // Check that page2 was destroyed.
    //     expect((page1).isDisplayed()).toBeTruthy();
    //     expect((page2).isPresent()).not.toBeTruthy();
    //
    //     // Check that page1 object is the same modified object.
    //     expect(status.getText()).toBe('modified');
    //   });
    // });

    // describe('page replacing', function () {
    //   it('should replace current page when a button is clicked', function () {
    //     var page1 = element(by.id('page1'));
    //     var page2 = element(by.id('page2'));
    //     var page3 = element(by.id('page3'));
    //     var status = element(by.id('status'));
    //
    //     expect(status.getText()).toBe('init');
    //
    //     element(by.id('btn1')).click();
    //     browser.wait(EC.visibilityOf(page2));
    //     browser.wait(EC.invisibilityOf(page1));
    //
    //     element(by.id('btn3')).click();
    //     browser.wait(EC.stalenessOf(page2));
    //
    //     expect(page3.isDisplayed()).toBeTruthy();
    //     expect(page2.isPresent()).not.toBeTruthy();
    //     expect(page1.isPresent()).toBeTruthy();
    //
    //     element(by.id('btn4')).click();
    //     browser.wait(EC.stalenessOf(page3));
    //
    //     expect(page1.isDisplayed()).toBeTruthy();
    //     expect(page3.isPresent()).not.toBeTruthy();
    //
    //     expect(status.getText()).toBe('modified');
    //   });
    // });

    // describe('page reset', function () {
    //   it('should reset to page', function () {
    //     var page1 = element(by.id('page1'));
    //     var page2 = element(by.id('page2'));
    //     var page3 = element(by.id('page3'));
    //     var page4 = element(by.id('page4'));
    //     var status = element(by.id('status'));
    //
    //     expect(status.getText()).toBe('init');
    //
    //     element(by.id('btn1')).click();
    //     browser.wait(EC.visibilityOf(page2));
    //     browser.wait(EC.invisibilityOf(page1));
    //
    //     element(by.id('btn6-reset')).click();
    //     browser.wait(EC.stalenessOf(page2));
    //
    //     expect(page1.isPresent()).toBeTruthy();
    //   });
    // });

    // describe('backbutton handler', function () {
    //   it('should work on \'backbutton\' event', function() {
    //     var page1 = element(by.id('page1'));
    //     var page2 = element(by.id('page2'));
    //
    //     element(by.id('btn1')).click();
    //     browser.wait(EC.visibilityOf(page2));
    //     browser.wait(EC.invisibilityOf(page1));
    //
    //     element(by.id('btn4-device-backbutton')).click();
    //     browser.wait(EC.stalenessOf(page2));
    //
    //     // Check that page2 was destroyed.
    //     expect((page1).isDisplayed()).toBeTruthy();
    //     expect((page2).isPresent()).not.toBeTruthy();
    //   });
    // });

    // describe('pop and refresh page', function () {
    //   it('should refresh previous page when a button is clicked', function () {
    //     var page1 = element(by.id('page1'));
    //     var page2 = element(by.id('page2'));
    //     var status = element(by.id('status'));
    //
    //     expect(status.getText()).toBe('init');
    //
    //     element(by.id('btn1')).click();
    //     browser.wait(EC.visibilityOf(page2));
    //     browser.wait(EC.invisibilityOf(page1));
    //
    //     // Check that page2 was created and that it's displayed.
    //     expect((page2).isDisplayed()).toBeTruthy();
    //     expect((page1).isDisplayed()).not.toBeTruthy();
    //     expect((page1).isPresent()).toBeTruthy();
    //
    //     element(by.id('btn5')).click();
    //     browser.wait(EC.stalenessOf(page2));
    //
    //     // Check that page2 was destroyed.
    //     expect((page1).isDisplayed()).toBeTruthy();
    //     expect((page2).isPresent()).not.toBeTruthy();
    //
    //     // Check that page1 object is a new unmodified object.
    //     expect(status.getText()).toBe('init');
    //   });
    // });

    // it('should emit events', function() {
    //   var pops = element(by.id('pops')),
    //     pushes = element(by.id('pushes'));
    //
    //   expect(pops.getText()).toBe('0');
    //   expect(pushes.getText()).toBe('1');
    //
    //   element(by.id('btn1')).click();
    //   browser.wait(EC.visibilityOf(element(by.id('btn2'))));
    //   element(by.id('btn2')).click();
    //   browser.wait(EC.textToBePresentInElement(pops, '1'));
    //
    //   expect(pops.getText()).toBe('1');
    //   expect(pushes.getText()).toBe('2');
    // });
  });
})();