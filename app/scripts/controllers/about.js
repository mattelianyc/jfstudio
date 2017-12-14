'use strict';

/**
 * @ngdoc function
 * @name erkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the erkApp
 */
angular.module('erkApp')
  .controller('AboutCtrl', function ($scope) {
    $('#About').click(function(){
    	$("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });
  });
