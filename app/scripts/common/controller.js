
;(function () {
  'use strict';

  angular.module('app.controller', [
    'app.user_auth'
  ])

  .controller('App', function ($scope, UserAuthFactory) {

    $scope.signOut = function() {

      console.log('Sign out clicked');

      // UserAuthFactory.signout();
      // $scope.signedIn = false;
    };

  });

}());

