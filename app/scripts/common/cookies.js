
;(function () {
  'use strict';

  angular.module('app.cookies', [
    'ngCookies',
    'app.server'
  ])

  .factory('UserCookieFactory', function ($cookieStore, HEROKU) {

    return {

      set: function (val) {
        $cookieStore.put('appUser', val);
      },

      get: function () {
        return $cookieStore.get('appUser');
      },

      remove: function () {
        $cookieStore.remove('appUser');
      },

      tokenizeHeader: function () {
        var c = this.get();
        if (c) return HEROKU.CONFIG.headers.authentication_token = c.authentication_token;
      }

    };

  });

}());

