
;(function () {
  'use strict';

  angular.module('app.rails', [])

  .constant('RAILS', {
    // URL: 'http://brian.t.proxylocal.com/',
    URL: 'https://health.herokuapp.com/',
    CONFIG: {
      headers: {
        authentication_token: ''
      }
    }
  });

}());

