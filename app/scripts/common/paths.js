
;(function () {
  'use strict';

  angular.module('app.paths', [])

  .constant('PATHS', {
    HOME: '/profile',
    PUBLIC: ['/signup', '/signin'],
  });

}());

