
;(function () {
  'use strict';

  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown({hover: false});

  angular.module('app', [

    // Router
    'app.router',
    'app.route_watchers',

    // Nav & global control
    'app.global_controller',

    // User authentication
    'app.user_signup',
    'app.user_signin',
    'app.user_profile',

    // Components
    'app.timeline',
    'app.questions',

  ]);

}());

