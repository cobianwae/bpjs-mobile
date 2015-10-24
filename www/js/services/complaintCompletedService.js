'use strict';
angular.module('app.services')
.factory('ComplaintCompleted', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + 'complaintCompleted/:id', {id:'@id'});
});
