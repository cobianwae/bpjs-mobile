angular.module('app.controllers')
.controller('signupConfirmationCtrl', function($scope, User, $state, $ionicPopup) {
	$scope.model = {};
	$scope.next = function() {
		console.log($scope.model);
		/*User.save($scope.model, function(data){
			$state.go('signup-confirmation');
		});*/

		/*User.update($scope.model, function(data){
			if(data.isSuccess) {*/
				$ionicPopup.alert({
		     title: 'Konfirmasi Pendaftaran',
		     template: 'Pendaftaran berhasil.'
		   }).then(function(){
		   		$state.go('login');
		   });
				
			/*}
		})*/
	}

	
})