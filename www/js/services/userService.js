'use strict';
angular.module('app.services')
.factory('User', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + 'users/:id', {id:'@id'});
});
