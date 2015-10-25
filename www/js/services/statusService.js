'use strict';
angular.module('app.services')
.factory('Status', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + 'status/:id', {id:'@id'});
});
