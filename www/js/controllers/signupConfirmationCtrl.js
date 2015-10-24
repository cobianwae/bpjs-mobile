angular.module('app.controllers')
.controller('signupConfirmationCtrl', function($scope, User, $state, $ionicPopup, $rootScope, Verification, $window) {
	$scope.model = {};
	$scope.next = function() {
		var req = {user_id: $rootScope.userProfile.id, identity_number_end : $scope.model.identity_number_end};

		Verification.save(req, function(data){
			console.log(data);
			if(data.success) {
				$window.localStorage.token = data.token;
				$ionicPopup.alert({
		     title: 'Konfirmasi Pendaftaran',
		     template: 'Pendaftaran berhasil.'
		   }).then(function(){
		   		$state.go('complaint');
		   });
				
			}
		})
	}

	
})