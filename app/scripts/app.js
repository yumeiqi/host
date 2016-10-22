'use strict';

/**
 * @ngdoc overview
 * @name hostApp
 * @description
 * # hostApp
 *
 * Main module of the application.
 */
angular
  .module('hostApp', [
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
      .when('/partners', {
        templateUrl: 'views/partners.html',
        controller: 'PartnersCtrl',
        controllerAs: 'partners'
      })
      .when('/term', {
        templateUrl: 'views/term.html',
        controller: 'TermCtrl',
        controllerAs: 'term'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
