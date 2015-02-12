define(['./module'],
	function(dashboardModule){
		'use strict';
    	 dashboardModule.controller('dashboardController', ['$scope','mapService',function($scope) {
    		$scope.mapRender = function(){
    				mapService.init();
    		}
		}]);
	});