'use strict';
angular.module('app.services')
.factory('Verification', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + 'verification/:id', {id:'@id'});
});
