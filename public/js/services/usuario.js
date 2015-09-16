app.factory("Usuario",
function($resource) {

  "use strict";

  return $resource("/user/");
});