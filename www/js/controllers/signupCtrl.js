angular.module('app.controllers')
.controller('signupCtrl', function($scope, User, $state, $ionicPopup, $rootScope) {
	$scope.model = {};
	$scope.submit = function() {		
		/*console.log($scope.model);*/

		User.save($scope.model, function(data){
			if(data.success == true) {
				console.log(data);
				$rootScope.userProfile = data.user;
				$rootScope.userAddress = data.address;
				$state.go('signupConfirmation');
			} else {
				$ionicPopup.alert({
	     		title: 'Terjadi Error',
	     		template: data.message
		   });
			}
			
			//
		});
		//$state.go('signupConfirmation');
	}
})