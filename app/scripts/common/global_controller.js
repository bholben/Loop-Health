
;(function () {
  'use strict';

  angular.module('app.global_controller', [
    'app.cookies',
    'app.user_auth',
    'gravatars',
  ])

  .controller('App', function ($scope, $rootScope, $location, UserAuthFactory, UserCookieFactory, GravatarsFactory) {

    // // Temp
    // $scope.signedIn = true;
    // $scope.test = 'Test';

    $scope.toggleUserMenu = function () {
      console.log('toggleUserMenu');
      $scope.showUserMenu = !$scope.showUserMenu;
    };

    var updateUserMenuState = function () {
      $scope.user = UserCookieFactory.get();
      console.log('$scope.user: ', $scope.user);
      // // Temp comment out
      // $scope.gravatarURL = GravatarsFactory.getURL('bholben@gmail.com', 'mm', 35);

      // $scope.signedIn = false;
      if ($scope.user) {
        $scope.signedIn = true;
        $scope.gravatarURL = GravatarsFactory.getURL($scope.user.email, 'mm', 35);
      }
    };

    $scope.open = function (path) {
      $location.path(path);
    };

    $scope.signOut = function() {
      console.log('Sign out clicked');
      UserAuthFactory.signout();
      $scope.signedIn = false;
    };

    updateUserMenuState();


    // Watchers

    $rootScope.$on('signin', function () {
      updateUserMenuState();
    });

    $rootScope.$on('signup', function () {
      updateUserMenuState();
    });

    $rootScope.$on('body click', function (event, obj) {
      if (!obj.avatarClicked) $scope.closeUserMenu();
    });

    $rootScope.$on('signin error', function (event, errorMsgs) {
      console.log('Signin errors: ', errorMsgs);
      $scope.error = errorMsgs[0];
    });

  });

}());

