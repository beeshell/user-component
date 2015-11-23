'use strict';

/**
 * @ngdoc directive
 * @name userAppApp.directive:notifyDirective
 * @description
 * # notifyDirective is used to create a notification when there's an error.
 */
angular.module('userAppApp')
  .directive('notifyDirective', function () {
    return {
      restrict: 'A',
      scope: {
        form: "=",
        errorMessage: '=',
        popPlace: '='
      },
      link: function (scope, element, attrs) {
        $(element).hover(function () {
          scope.form.errors.push("Error");
          $(element).popover();
          var popover = $(element).data('bs.popover');
          popover.options.placement = scope.popPlace;
          popover.options.content = scope.errorMessage;
          $(element).popover('show');
        }, function () {
          $(this).popover('hide');
        });
      }
    };
  });
