define(['angular','./module'],
	function(ng, module){
		'use strict';
    	 module.factory('mapService', function() {
        var service ={}

        service.init = function(){
          var mapOptions = {
                  center: new google.maps.LatLng(-34.397, 150.644),
                  zoom: 8,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              var map = new google.maps.Map(document.getElementById("map_canvas"),
                mapOptions);
        }

        return service;
		});
	});