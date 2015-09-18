app.factory('LoadingInterceptor', function($q, $rootScope){
      
      var numLoadings = 0; 
    
      return {
        request: function(config) {   
                 
          $rootScope.loading = !!(++numLoadings);
          
          return config;		
        },
        requestError: function(rejection) {
          $rootScope.loading = !!(--numLoadings);
      
          return $q.reject(rejection);
        },
        response: function(response) {
          
          $rootScope.loading = !!(--numLoadings);          
          
          return response || $q.when(response);
        },
        responseError: function(rejection) {
          $rootScope.loading = !!(--numLoadings);
      
          return $q.reject(rejection);
        }
      };
  });