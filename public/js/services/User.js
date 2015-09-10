app.factory("User",
function($resource) {

  "use strict";

  return $resource("/user/");
});