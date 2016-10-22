'use strict';

describe('Controller: AppstoreCtrl', function () {

  // load the controller's module
  beforeEach(module('hostApp'));

  var AppstoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppstoreCtrl = $controller('AppstoreCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AppstoreCtrl.awesomeThings.length).toBe(3);
  });
});
