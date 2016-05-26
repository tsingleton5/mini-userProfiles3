angular.module('userProfiles').service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      console.log(response);
      var parsedResponse = response.data.data;
      for(var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Ralf ' + i;
        parsedResponse[i].last_name = 'Johnson';
      }
      deferred.resolve(parsedResponse)  //this is being resolved(passed) to controller
    })
    return deferred.promise;
  }
});
