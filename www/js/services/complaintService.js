'use strict';
angular.module('app.services')
.factory('Complaint', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + 'complaints/:id', {id:'@id'});
});
