
;(function () {
  'use strict';

  angular.module('app.crud', [
    'app.server',
    'app.cookies'
  ])

  .factory('Crud', function ($http, HEROKU, UserCookieFactory) {

    var url = function (path, id) {
      return HEROKU.URL + path + '/' + (id || '');
    };

    return {

      create: function (path, obj) {
        UserCookieFactory.tokenizeHeader();
        return $http.post(url(path), obj, HEROKU.CONFIG);
      },

      retrieveAll: function (path) {
        UserCookieFactory.tokenizeHeader();
        return $http.get(url(path), {
          headers: HEROKU.CONFIG.headers,
          cache: true
        });
      },

      retrieve: function (path, id) {
        UserCookieFactory.tokenizeHeader();
        return $http.get(url(path, id), HEROKU.CONFIG);
      },

      update: function (path, obj) {
        UserCookieFactory.tokenizeHeader();
        return $http.put(url(path, obj.id), obj, HEROKU.CONFIG);
      },

      delete: function (path, id) {
        UserCookieFactory.tokenizeHeader();
        return $http.delete(url(path, id), HEROKU.CONFIG);
      },

    };

  });

}());

