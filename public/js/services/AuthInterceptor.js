app.factory('AuthInterceptor', ['$q', function($q) {
    return {
      request: function(config) {
        console.log('Request made with ', config);
		
        return config;		
      },
      requestError: function(rejection) {
        console.log('Request error due to ', rejection);
		
        return $q.reject(rejection);
      },
      response: function(response) {
        console.log('Response from server', response);
		
        return response || $q.when(response);
      },
      responseError: function(rejection) {
        console.log('Error in response ', rejection);
		
        return $q.reject(rejection);
      }
    };
  }]);