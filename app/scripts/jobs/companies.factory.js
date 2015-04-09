
;(function () {
  'use strict';

  angular.module('app.jobs')

  .factory('CompaniesFactory', function ($http, $rootScope, $location, HEROKU, PATHS, UsersFactory) {

    var broadcast = function(action, obj) {
      $rootScope.$broadcast('companies:' + action, obj);
    };

    return {

      create: function (obj) {
        console.log('obj: ', obj);
        console.log('config(): ', UsersFactory.config());
        $http.post(HEROKU.URL + 'company_detail', obj, UsersFactory.config())
          .success(function (res) {

            console.log('res: ', res);

            obj.id = res.id;

            console.log('obj: ', obj);

            broadcast('created', obj);
          });
      },

      retrieveAll: function () {

        // TODO:
        // Need to return falsey if no data (Dashboard page
        // will not be default home page in this case).

        return $http.get(HEROKU.URL + 'company_detail', UsersFactory.config());
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

