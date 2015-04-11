
;(function () {
  'use strict';

  angular.module('gravatars', [])

  .factory('GravatarsFactory', function () {

    return {

      getURL: function (str, defaultImg, size) {
        var gravURL = 'http://www.gravatar.com/avatar/',
            hash = CryptoJS.MD5(str).toString();
        return gravURL + hash + '?s=' + size + '&d=' + defaultImg;
      }

    };

  });

}());

