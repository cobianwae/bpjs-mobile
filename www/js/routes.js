angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signUp.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('signupConfirmation', {
      url: '/signup-confirmation',
      templateUrl: 'templates/signupConfirmation.html',
      controller: 'signupConfirmationCtrl'
    })
        
      
    
      
        
    .state('complaint', {
      url: '/complaint',
      templateUrl: 'templates/complaint.html',
      controller: 'complaintCtrl'
    })
        
      
    
      
        
    .state('status', {
      url: '/status',
      templateUrl: 'templates/status.html',
      controller: 'statusCtrl'
    })
        
      
    
      
        
    .state('detailStatus', {
      url: '/status-details',
      templateUrl: 'templates/detailStatus.html',
      controller: 'detailStatusCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});