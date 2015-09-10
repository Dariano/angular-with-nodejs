app.factory("UserProfile",
function($q, User) {

  "use strict";

  var deferred = $q.defer();

  User.get(function(userProfile) {    
    deferred.resolve({      
      hasRole: function(role) {
        return userProfile.roles.indexOf(role) >= 0;
      },

      hasAnyRole: function(roles) {
        return !!userProfile.roles.filter(function(role) {
          return roles.indexOf(role) >= 0;
        }).length;
      },

      isAnonymous: function() {
        return userProfile.anonymous;
      },

      isAuthenticated: function() {
        return !userProfile.anonymous;
      }

    });
  });

  return deferred.promise;

});