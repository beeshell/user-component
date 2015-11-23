'use strict';

describe('Controller: AddUserCtrl', function () {

  // load the controller's module
  beforeEach(module('userAppApp'));

  var AddUserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddUserCtrl = $controller('AddUserCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddUserCtrl.awesomeThings.length).toBe(3);
  });
});
