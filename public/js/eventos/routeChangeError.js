app.run(["$rootScope", "ControleDeAcesso", "$location",
function($rootScope, ControleDeAcesso, $location) {

  "use strict";

  $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
    if (rejection == ControleDeAcesso.NAOAUTORIZADO) {
      $location.path("/login");
      console.log('ControleDeAcesso.NAOAUTORIZADO');
    } else if (rejection == ControleDeAcesso.NEGADO) {
      console.log('ControleDeAcesso.NEGADO');
      $location.path("/acesso-negado");
    }
  });

}]);