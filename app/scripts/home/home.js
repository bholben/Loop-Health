
;(function () {
  'use strict';

  angular.module('app.home', [])

  .controller('Home', function ($scope, HomeFactory) {

    $scope.visits = HomeFactory.getVisits();

    console.log($scope.visits);

    $scope.toggleDetails = function (id) {
      console.log(id);
      $scope.showDetails = !$scope.showDetails;
    };

  });

}());

