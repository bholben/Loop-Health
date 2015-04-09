
;(function () {
  'use strict';

  angular.module('app.route_watchers', [
    'lodash',
    'app.cookies',
    'app.paths',
  ])

  // Run once at setup
  .run(function ($rootScope, $location, _, UserCookieFactory, PATHS) {

    $rootScope.$on('$routeChangeStart', function () {

      // Only access a secure route if an authorized user is signed in
      var signedIn = UserCookieFactory.tokenizeHeader(),
          publicRoute = _.includes(PATHS.PUBLIC, $location.path());

      if (!signedIn) {
        $rootScope.$broadcast('not signed in');
        if (!publicRoute) $location.path('/signup');
      }

    });

  });

}());

