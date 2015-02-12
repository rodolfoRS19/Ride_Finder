define([
    'angular',
    'router',
    './src/map_Service/loader',
    './src/home/loader',
    './src/dashboard/loader'
], function (ng,$stateProvider) {
    'use strict';
     ng.module('app', ['app.home','app.dashboard','ui.router'])

     	.config(function($stateProvider,$urlRouterProvider){

	 		$stateProvider.state('contacts', {
	 		  url:'/contacts',
			  template: '<h1>{{hello}}</h1>',
			  controller:'homeController'	
			})

            $stateProvider.state('index',{
                url:'/index',
                template:'<button type="button" ng-click="mapRender()">Click Me!</button><div id="map_canvas" style="width:100%; height:100%"></div>',
                controller:'dashboardController'
            })

            $urlRouterProvider.when('','index');
     	});
});