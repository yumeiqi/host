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
      .when('/marketing_push', {
        templateUrl: 'views/marketing_push.html',
        controller: 'MarketingPushCtrl',
        controllerAs: 'marketingPush'
      })
      .when('/agent', {
        templateUrl: 'views/agent.html',
        controller: 'AgentCtrl',
        controllerAs: 'agent'
      })
      .when('/appstore', {
        templateUrl: 'views/appstore.html',
        controller: 'AppstoreCtrl',
        controllerAs: 'appstore'
      })
      .when('/example', {
        templateUrl: 'views/example.html',
        controller: 'ExampleCtrl',
        controllerAs: 'example'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
