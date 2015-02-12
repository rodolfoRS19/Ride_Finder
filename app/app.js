define([
    'angular',
    'router',
    './src/home/loader',
    './src/map_Service/loader',
    './src/dashboard/loader'
], function (ng,$stateProvider) {
    'use strict';
     ng.module('app', ['app.home','ui.router'])

     	.config(function($stateProvider){

	 		$stateProvider.state('contacts', {
	 		  url:'/contacts',
			  template: '<h1>{{hello}}</h1>',
			  controller:'homeController'	
			})

            $stateProvider.state('map',{
                url:'/map',
                template:'<div id="map_canvas" style="width:100%; height:100%"></div>',
                controller:'dashboardController'
            })
     	});
});