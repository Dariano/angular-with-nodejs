app.factory('AuthInterceptor', ['$q', function($q) {
    return {
      request: function(config) {
        //console.log('Requisição ', config);
		
        return config;		
      },
      requestError: function(rejection) {
        //console.log('Erro na requisição ', rejection);
		
        return $q.reject(rejection);
      },
      response: function(response) {
        //console.log('Resposta do servidor', response);
		
        return response || $q.when(response);
      },
      responseError: function(rejection) {
        //console.log('Erro na resposta ', rejection);
		
        return $q.reject(rejection);
      }
    };
  }]);
  
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