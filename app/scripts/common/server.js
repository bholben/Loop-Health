
;(function () {
  'use strict';

  angular.module('app.server', [])

  .constant('HEROKU', {

    // URL: 'http://brian.t.proxylocal.com/'
    URL: 'https://pre-post-interview.herokuapp.com/',

    CONFIG: {
      headers: {
        authentication_token: ''
      }
    }
  });

}());

