app.run(["$rootScope", "Access", "$location",
function($rootScope, Access, $location) {

  "use strict";

  $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
    if (rejection == Access.UNAUTHORIZED) {
      $location.path("/login");
      console.log('Access.FORBIDDEN');
    } else if (rejection == Access.FORBIDDEN) {
      console.log('Access.FORBIDDEN');
      $location.path("/forbidden");
    }
  });

}]);