
;(function () {
  'use strict';

  angular.module('app.user_auth', [
    'app.cookies',
    'app.server',
    'app.paths',
  ])

  .factory('UserAuthFactory', function ($http, $rootScope, $location, UserCookieFactory, HEROKU, PATHS) {

    var broadcast = function(action, obj) {
      $rootScope.$broadcast(action, obj);
    };

    return {

      signup: function (userObj) {
        // $.post(HEROKU.URL, {user: userObj});
        console.log('POST: ', {user: userObj});
        $http.post(HEROKU.URL + 'users/', {user: userObj})
          .success(function (res) {
            console.log('Sign up response: ', res);
            UserCookieFactory.set(res.user);
            $location.path(PATHS.HOME);
            broadcast('signup');
          })
          .error(function (res) {
            console.log('Sign up error response: ', res);
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
            console.log('Sign in error response: ', res);
            broadcast('signin error', res.messages || []);
          });
      },

      signout: function () {
        UserCookieFactory.remove();
        broadcast('signout');
        $location.path('/signin');
      },

    };

  });

}());

