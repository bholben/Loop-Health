
;(function () {
  'use strict';

  angular.module('app.user_signin', [
    'app.cookies',
    'app.user_auth',
    'app.paths',
  ])

  .controller('UserSignin', function ($scope, $rootScope, $location, UserAuthFactory, UserCookieFactory, PATHS) {

    // Redirect if signed in (and leave this controller).
    if (UserCookieFactory.get()) return $location.path(PATHS.HOME);

    $scope.signin = function (user) {
      UserAuthFactory.signin(user);
    };


    // Listen for signin broadcast

    $rootScope.$on('signin error', function (event, data) {
      console.log('signin error: ', data);
      $scope.error = data;
    });

  });

}());

