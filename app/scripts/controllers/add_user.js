'use strict';

/**
 * @ngdoc function
 * @name userAppApp.controller:AddUserCtrl
 * @description
 * # AddUserCtrl
 * Controller of the userAppApp
 */
angular.module('userAppApp')
  .controller('AddUserCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.form = {
      errors: []
    };

    /**
     * Initializing user component.
     * @type {{name: string, initials: string, title: string, nic: string}}
     */
    $scope.user = {
      name: "",
      initials: "",
      title: "",
      nic: ""
    };

    /**
     * This is for
     */
    $(document).ready(function () {
      $('[data-toggle="popover"]').popover();
    });

    /**
     * Do all the validation and create the new user.
     * Pass the user object to the user service.
     */
    $scope.saveUser = function () {
      $scope.form.errors = [];

      if ($scope.user.name == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#name').popover();
        var popover = $('#name').data('bs.popover');
        popover.options.content = 'Enter valid name.';
        popover.options.placement = "right";
        $('#name').popover('show');
        $('#name').next('.popover');
      } else {
        $('#name').popover('hide');
      }
      if ($scope.user.initials == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#initials').popover();
        var popover = $('#initials').data('bs.popover');
        popover.options.content = 'Enter valid initials.';
        popover.options.placement = "right";
        $('#initials').popover('show');
        $('#initials').next('.popover');
      } else {
        $('#initials').popover('hide');
      }
      if ($scope.user.title == '') {
        console.log("Error");
        $scope.form.errors.push("Error");
        $('#title').popover();
        var popover = $('#title').data('bs.popover');
        popover.options.content = 'Select user title';
        popover.options.placement = "right";
        $('#title').popover('show');
        $('#title').next('.popover');
      } else {
        $('#title').popover('hide');
      }
      if ($scope.user.nic == '' || !isInt($scope.user.nic)) {
        console.log("Error");
        $scope.form.errors.push("Error");
        console.log(isInt($scope.user.nic));
        $('#nic').popover();
        var popover = $('#nic').data('bs.popover');
        popover.options.content = 'Enter valid NIC';
        popover.options.placement = "right";
        $('#nic').popover('show');
        $('#nic').next('.popover');
      } else {
        $('#nic').popover('hide');
      }
      if ($scope.form.errors.length > 0) {
        return;
      }
      alert("Form is valid");
    };

    /**
     * check nic for only numbers.
     */
    $scope.validateNIC = function () {
      if (isInt($scope.user.nic)) {

      } else {
        $('#nic').popover();
        var popover = $('#nic').data('bs.popover');
        popover.options.content = 'Text characters banned';
        $('#nic').popover('show');
        $('#nic').next('.popover');
      }
    };
    function isInt(value) {
      return !isNaN(value) && (function (x) {
          return (x | 0) === x;
        })(parseFloat(value))
    }

    /**
     * To the next field and focus it.
     * Used ng-blur method.
     */
    $scope.activeInitialize = function (event) {
      if (event.which === 13) {
        console.log("TAB activated");
        console.log(event);
        document.getElementById("initials").focus();
      }
    };
    $scope.activeTitleSelect = function (event) {
      if (event.which === 13) {
        document.getElementById("title").focus();
      }
    };
    $scope.activeNic = function (event) {
      if (event.which === 13) {
        document.getElementById("nic").focus();
      }
    };
    $scope.activeReviewButton = function (event) {
      if (event.which == 13) {
        document.getElementById("reviewBtn").focus();
      }
    };

    $scope.openReviewModal = function () {
      $('#reviewModal').modal('show');
    }

  });
