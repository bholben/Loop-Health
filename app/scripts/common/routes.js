
;(function () {
  'use strict';

  angular.module('app.router', [
    'ngRoute',
    'app.paths',
  ])

  .config(function ($routeProvider, PATHS) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'scripts/user-signup/user-signup.html',
        controller: 'UserSignup'
      })
      .when('/signin', {
        templateUrl: 'scripts/user-signin/user-signin.html',
        controller: 'UserSignin'
      })
      .when('/profile', {
        templateUrl: 'scripts/user-profile/user-profile.html',
        controller: 'UserProfile'
      })
      .when('/timeline', {
        templateUrl: 'scripts/timeline/timeline.html',
        controller: 'Timeline'
      })
      .when('/questions', {
        templateUrl: 'scripts/questions/questions.html',
        controller: 'Questions'
      })
      .otherwise(PATHS.HOME);
  });

}());

