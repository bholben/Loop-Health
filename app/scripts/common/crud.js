
;(function () {
  'use strict';

  angular.module('app.crud', [
    'app.rails',
    'app.cookies'
  ])

  .factory('Crud', function ($http, RAILS, UserCookieFactory) {

    var url = function (path, id) {
      return RAILS.URL + path + '/' + (id || '');
    };

    return {

      create: function (path, obj) {
        UserCookieFactory.tokenizeHeader();
        return $http.post(url(path), obj, RAILS.CONFIG);
      },

      retrieveAll: function (path) {
        UserCookieFactory.tokenizeHeader();
        return $http.get(url(path), {
          headers: RAILS.CONFIG.headers,
          cache: true
        });
      },

      retrieve: function (path, id) {
        UserCookieFactory.tokenizeHeader();
        return $http.get(url(path, id), RAILS.CONFIG);
      },

      update: function (path, obj) {
        UserCookieFactory.tokenizeHeader();
        return $http.put(url(path, obj.id), obj, RAILS.CONFIG);
      },

      delete: function (path, id) {
        UserCookieFactory.tokenizeHeader();
        return $http.delete(url(path, id), RAILS.CONFIG);
      },

    };

  });

}());

