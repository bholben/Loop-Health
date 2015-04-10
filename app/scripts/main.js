
;(function () {
  'use strict';

  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown({hover: false});

  angular.module('app', [
    'ngRoute',
    'app.users',
    // 'app.component1',


    // // Router
    // 'app.router',
    // 'app.route_watchers',

    // // User authentication
    // 'app.users',
    // 'app.user_signup',


  ]);

}());

