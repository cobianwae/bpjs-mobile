'use strict';
angular.module('app.services')
.factory('Authentication', function($resource, ENV) {
  return $resource(ENV.apiEndpoint + 'authentication/:id', {id:'@id'});
});
