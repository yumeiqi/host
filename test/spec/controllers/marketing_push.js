'use strict';

describe('Controller: MarketingPushCtrl', function () {

  // load the controller's module
  beforeEach(module('hostApp'));

  var MarketingPushCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarketingPushCtrl = $controller('MarketingPushCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MarketingPushCtrl.awesomeThings.length).toBe(3);
  });
});
