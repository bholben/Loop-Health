
;(function () {
  'use strict';

  angular.module('app.events', [])

  .controller('Events', function ($scope, $location, UsersFactory) {

    // Redirect if not signed in
    if (!UsersFactory.getCookie()) return $location.path('/signin');

  });

}());

