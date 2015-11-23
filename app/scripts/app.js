'use strict';

/**
 * @ngdoc overview
 * @name userAppApp
 * @description
 * # userAppApp
 *
 * Main module of the application.
 */
angular
  .module('userAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/add_user', {
        templateUrl: 'views/add_user.html',
        controller: 'AddUserCtrl',
        controllerAs: 'addUser'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
