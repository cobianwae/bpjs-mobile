angular.module('app.controllers')
.controller('loginCtrl', function($scope, User, $state) {
	$scope.model = {};
	$scope.submit = function() {		
		/*console.log($scope.model);
		User.save($scope.model, function(data){
			$state.go('signup-confirmation');
		});*/
		$state.go('signupConfirmation');
	}
})