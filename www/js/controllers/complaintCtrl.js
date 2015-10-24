angular.module('app.controllers')
.controller('complaintCtrl', function($scope, User, $state, $ionicLoading, Complaint) {	 
  $scope.model = {};
  $scope.location = 'current_location';
  $scope.isCurrentLocation = true;
  $scope.$on('mapInitialized', function(event, map) {  	
    navigator.geolocation.getCurrentPosition(function(position) {
    	$scope.latitude = position.coords.latitude;
    	$scope.longitude = position.coords.longitude;
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);      
      map.setCenter(pos);
      console.log($scope.latitude);
    });
  });

  $scope.submit = function() {
  	if($scope.location === 'current_location') {
  		$scope.model.location_reference = $scope.latitude + ',' + $scope.longitude;
  	} else {
  		$scope.model.location_reference = 'address';
  	}
  	console.log($scope.model);

  	/*Complaint.save($scope.model, function(){

  	});*/
  }

  /*$scope.changeLocation = function(value) {  	
  	console.log(value);
  }*/
  /*$scope.usingCurrentLocation = function() {
  	console.log('sini 2');
  	$scope.isCurrentLocation = true;
		$ionicLoading.show({
      template: 'Loading...'
    });

    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $scope.positions.push({lat: pos.k,lng: pos.B});
      console.log(pos);
      $scope.map.setCenter(pos);
      $ionicLoading.hide();
    });
  }*/
	/*$scope.model = {};
	console.log(navigator);

	$scope.map = {
		center: {
			latitude: 45, 
			longitude: -73
		},
		zoom: 15,
 	};

 var onSuccess = function(position) {
	  $scope.map.center = {
	      latitude: position.coords.latitude,
	      longitude: position.coords.longitude
	  };
  	console.log(position);
  	$scope.$apply();

	}

	function onError(error) {
  	console.log('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
	}

	$scope.submit = function() {		
		alert('tara');
		console.log(navigator.geolocation);		
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}*/



	
	//navigator.geolocation.getCurrentPosition(onSuccess, onError);

})