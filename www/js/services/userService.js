'use strict';
angular.module('app.services')
.factory('User', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + 'user/:id', {id:'@id'});
});
