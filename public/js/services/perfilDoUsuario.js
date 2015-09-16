app.factory("PerfilDoUsuario",
function($q, Usuario) {

  "use strict";

  var deferred = $q.defer();

  Usuario.get(function(perfil) {    
    deferred.resolve({      
      temRegra: function(regra) {
        return perfil.roles.indexOf(regra) >= 0;
      },

      temAlgumaRegra: function(regras) {
        return !!perfil.roles.filter(function(regra) {
          return regras.indexOf(regra) >= 0;
        }).length;
      },

      ehAnonimo: function() {
        return perfil.anonymous;
      },

      estaAutenticado: function() {
        return !perfil.anonymous;
      }

    });
  });

  return deferred.promise;

});