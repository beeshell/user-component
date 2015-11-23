'use strict';

/**
 * @ngdoc directive
 * @name userAppApp.directive:simpleMessage
 * @description
 * # simpleMessage
 */
angular.module('userAppApp')
  .directive('simpleMessage', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the simpleMessage directive');
      }
    };
  });
