
;(function () {
  'use strict';

  angular.module('app.timeline', [])

  .controller('Timeline', function ($scope, TimelineFactory) {

    $scope.visits = TimelineFactory.getVisits();

    console.log($scope.visits);

  });

}());

