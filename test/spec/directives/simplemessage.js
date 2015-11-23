'use strict';

describe('Directive: simpleMessage', function () {

  // load the directive's module
  beforeEach(module('userAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<simple-message></simple-message>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the simpleMessage directive');
  }));
});
