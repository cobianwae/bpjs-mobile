angular.module('app.controllers')
.controller('loginCtrl', function($scope, User, $state, Authentication, $ionicPopup, ComplaintCompleted, $rootScope, $window) {
	$scope.model = {};
	$scope.submit = function() {		
		console.log($scope.model);
		Authentication.save($scope.model, function(data){
			if(data.success)	 {

				$window.localStorage.token = data.token;
				$rootScope.user_id = data.user_id;
				ComplaintCompleted.get({id: $rootScope.user_id}, function(response){					
					if(response.status == 'in_progress') {
						$state.go('status');	
					} else {
						$state.go('complaint');	
					}
				})
			} else {
				$ionicPopup.alert({
	     		title: 'Terjadi Error',
	     		template: data.message
		   });
			}
		})
		/*console.log($scope.model);
		User.save($scope.model, function(data){
			$state.go('signup-confirmation');
		});*/
		
	}
})