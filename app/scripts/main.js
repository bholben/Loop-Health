
;(function () {
  'use strict';

  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown({hover: false});

  angular.module('app', [

    // Router
    'app.router',
    'app.route_watchers',

    // User authentication
    'app.users',
    // 'app.user_signup',
    // 'app.user_signin',

    // Components
    'app.component1',

  ]);

}());

