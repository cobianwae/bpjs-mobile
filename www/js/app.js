// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngCordova', 'ionic.service.core', 'ionic.service.push', 'ngMap', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'config'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
})
.config(['$ionicAppProvider', function($ionicAppProvider) {
  $ionicAppProvider.identify({
    app_id: 'c23e2c86',
    api_key: '1e412d7f9e04b8afecd32e34c1670b0f93f02d07fd6546c7',
    //dev_push: true
  });
}])