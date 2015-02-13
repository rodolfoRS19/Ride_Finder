define([
    'angular',
    'router',
    './src/mapsService/loader',
    './src/dashboard/loader'
], function (ng,$stateProvider) {
    'use strict';
     ng.module('app', ['app.dashboard','ui.router'])

     	.config(function($stateProvider,$urlRouterProvider){


            $stateProvider.state('index',{
                url:'/index',
                templateUrl:'app/src/partials/googleMaps.html',
                controller:'dashboardController'
            })

            $urlRouterProvider.when('','index');
     	});
});