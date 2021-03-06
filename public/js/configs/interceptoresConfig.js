app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
  $httpProvider.interceptors.push('LoadingInterceptor');
/*
  // Todo dado de POST passa a ter estilo jQuery
  $httpProvider.defaults.transformRequest.push(function(data) {
    var requestStr;

    if (data) {
      data = JSON.parse(data);

      for (var key in data) {
        if (requestStr) {
          requestStr += '&' + key + '=' + data[key];
        } else {
          requestStr = key + '=' + data[key];
        }
      }
    }

    return requestStr;
  });
*/
  // Define o tipo de conteúdo como FORM para todas as solicitações POST
  // Isso não vale para solicitações GET
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';

  //$httpProvider.defaults.useXDomain = true;
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);