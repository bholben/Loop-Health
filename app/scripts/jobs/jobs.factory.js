
;(function () {
  'use strict';

  angular.module('app.jobs')

  .factory('JobsFactory', function ($http, $rootScope, $location, HEROKU, PATHS, UsersFactory) {

    var broadcast = function(action, obj) {
      $rootScope.$broadcast('jobs:' + action, obj);
    };

    return {

      create: function (obj) {
        console.log('obj: ', obj);
        console.log('config(): ', UsersFactory.config());
        $http.post(HEROKU.URL + 'job', obj, UsersFactory.config())
          .success(function (res) {

            console.log('res: ', res);

            obj.id = res.id;

            console.log('obj: ', obj);

            broadcast('created', obj);
          });
      },

      update: function(obj) {
        $http.put(HEROKU.URL, obj, UsersFactory.config())
          .success(function () { broadcast('updated'); });
      },

      delete: function(obj) {
        $http.delete(HEROKU.URL, UsersFactory.config())
          .success(function () { broadcast('deleted', obj); });
      }

    };

  });

}());

