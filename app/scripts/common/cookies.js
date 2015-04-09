
;(function () {
  'use strict';

  angular.module('app.cookies', [
    'ngCookies',
    'app.rails'
  ])

  .factory('UserCookieFactory', function ($cookieStore, RAILS) {

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
        if (c) return RAILS.CONFIG.headers.authentication_token = c.authentication_token;
      }

    };

  });

}());

