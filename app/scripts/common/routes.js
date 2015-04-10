
;(function () {
  'use strict';

  angular.module('app.router', [
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'scripts/users/user.signup.html',
        controller: 'Users'
      })
      .when('/signin', {
        templateUrl: 'scripts/users/user.signin.html',
        controller: 'Users'
      })
      .when('/settings', {
        templateUrl: 'scripts/users/user.settings.html',
        controller: 'UserProfile'
      })
      .when('/component1', {
        templateUrl: 'scripts/component1/component1.html',
        controller: 'Component1'
      })
      .otherwise('/settings');
  });

}());

