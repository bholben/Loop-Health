
;(function () {
  'use strict';

  angular.module('app.users', [
    'app.cookies',
    'app.user_auth',
    'app.paths',
  ])

  .controller('UserSignup', function ($scope, $rootScope, $location, UserAuthFactory, UserCookieFactory, PATHS) {

    // Redirect if signed in (and leave this controller).
    if (UserCookieFactory.get()) return $location.path(PATHS.HOME);

    $scope.signup = function (user) {
      if (user.password === user.password_confirmation) {
        UserAuthFactory.signup(user);
      } else {
        $scope.error = 'Passwords don\'t match.  Please try again.';
        $scope.user.password = '';
        $scope.user.password_confirmation = '';
        $('#password').focus();
      }
    };


    // Listen for signup broadcast

    $rootScope.$on('signup error', function (event, data) {
      console.log('signup error: ', data);
      $scope.error = data;
    });

  });

}());

