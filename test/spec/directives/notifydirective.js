'use strict';

describe('Directive: notifyDirective', function () {

  // load the directive's module
  beforeEach(module('userAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<notify-directive></notify-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the notifyDirective directive');
  }));
});
