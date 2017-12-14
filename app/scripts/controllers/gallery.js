'use strict';

/**
 * @ngdoc function
 * @name erkApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the erkApp
 */
angular.module('erkApp')
  .controller('GalleryCtrl', function ($scope) {
    $('#Gallery').click(function(){
    	$("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });
  });
