
;(function () {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'app.users',
    'app.events',
    'app.jobs'
  ])

  .constant('HEROKU', {
    // URL: 'http://brian.t.proxylocal.com/'
    URL: 'https://pre-post-interview.herokuapp.com/'
  })

  // .constant('AWS', {
  //   URL: '',
  //   headers: {
  //     '': ''
  //   }
  // })

  // .constant('LINKEDIN', {
  //   URL: 'https://api.linkedin.com/v1/',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'x-li-format': 'json'
  //   }
  // })

  .constant('PATHS', {
    HOME: '/settings'
  });

}());

