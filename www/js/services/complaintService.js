'use strict';
angular.module('app.services')
.factory('Complaint', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + 'complaint/:id', {id:'@id'});
});
