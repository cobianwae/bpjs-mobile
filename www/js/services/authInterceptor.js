'use strict';
angular.module('app.services')
	.factory('authInterceptor', function ($rootScope, $q, $window) {
		return {
			request: function (config) {
				config.headers = config.headers || {};
				if ($window.localStorage.token) {
					config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
				}
				return config;
			},
			responseError: function (rejection) {
				if (rejection.status === 401) {
				// handle the case where the user is not authenticated
				}
				return $q.reject(rejection);
			}
		};
	});
