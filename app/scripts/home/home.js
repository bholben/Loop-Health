
;(function () {
  'use strict';

  angular.module('app.home', [])

  .controller('Home', function ($scope, HomeFactory) {

    $scope.visits = HomeFactory.getVisits();

    console.log($scope.visits);

    var showAll = true;

    var showOnly = {
      Cardiology: false,
      'General Surgery': false,
      Nursing: false,
      Nephrology: false,
    };

    $scope.toggleDetails = function (visit) {
      console.log(visit.department);
      if (visit.department === 'Cardiology') { showOnly.Cardiology = !showOnly.Cardiology; }
      if (visit.department === 'General Surgery') { showOnly['General Surgery'] = !showOnly['General Surgery']; }
      if (visit.department === 'Nursing') { showOnly.Nursing = !showOnly.Nursing; }
      if (visit.department === 'Nephrology') { showOnly.Nephrology = !showOnly.Nephrology; }

      showAll = true;
      for (var s in showOnly) {
        if (showOnly[s] === true) {
          showAll = false;
        }
      }
    };

    $scope.showDetails = function (dept) {
      return showOnly[dept];
    };

    $scope.activeDept = function (dept) {
      // console.log('showAll: ', showAll, ' showOnly[dept]: ', dept, showOnly[dept]);
      if (showAll) {
        return true;
      } else {
        return showOnly[dept];
      }
    };

  });

}());

