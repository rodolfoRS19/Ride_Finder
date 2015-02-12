define(['./module'],
	function(dashboardModule){
		'use strict';
    	 dashboardModule.controller('dashboardController', ['$scope','mapService',function($scope,mapService) {
    	 	console.log("hola");
    		$scope.mapRender = function(){
    				mapService.init();
    		}
		}]);
	});