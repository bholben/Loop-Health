
;(function () {
  'use strict';

  angular.module('app.users', [
    'app.cookies',
    'app.server',
    'app.paths',
  ])

  .factory('UsersFactory', function ($http, $rootScope, $location, UserCookieFactory, HEROKU, PATHS) {

    var broadcast = function(action, obj) {
      $rootScope.$broadcast(action, obj);
    };

    return {

      signup: function (userObj) {
        $http.post(HEROKU.URL + 'users/', {user: userObj})
          .success(function (res) {
            console.log('Sign up response: ', res);
            UserCookieFactory.set(res.user);
            $location.path(PATHS.HOME);
            broadcast('signup');
          })
          .error(function (res) {
            broadcast('signup error', res.messages || []);
          });
      },

      signin: function (userObj) {
        $http.post(HEROKU.URL + 'users/sign_in/', {user: userObj})
          .success(function (res) {
            console.log('Sign in response: ', res);
            UserCookieFactory.set(res.user);
            $location.path(PATHS.HOME);
            broadcast('signin');
          })
          .error(function (res) {
            broadcast('signin error', res.messages || []);
          });
      },

      signout: function () {
        UserCookieFactory.remove();
        broadcast('signout');
        $location.path('/signup');
      },

    };

  });

}());

