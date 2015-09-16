app.factory("ControleDeAcesso",
function($q, PerfilDoUsuario) {

  "use strict";

  var ControleDeAcesso = {

    SUCESSO: 200,
    NAOAUTORIZADO: 401,
    NEGADO: 403,

    usuarioTem: function(regra) {
      var deferred = $q.defer();
      PerfilDoUsuario.then(function(perfil) {
        if (perfil.temRegra(regra)) {
          deferred.resolve(ControleDeAcesso.SUCESSO);
        } else if (perfil.ehAnonimo()) {
          deferred.reject(ControleDeAcesso.NAOAUTORIZADO);
        } else {
          deferred.reject(ControleDeAcesso.NEGADO);
        }
      });
      return deferred.promise;
    },

    usuarioTemAlgumaDasRegras: function(regras) {
      var deferred = $q.defer();
      PerfilDoUsuario.then(function(perfil) {
        if (perfil.hasAnyRole(regras)) {
          deferred.resolve(ControleDeAcesso.SUCESSO);
        } else if (perfil.ehAnonimo()) {
          deferred.reject(ControleDeAcesso.NAOAUTORIZADO);
        } else {
          deferred.reject(ControleDeAcesso.NEGADO);
        }
      });
      return deferred.promise;
    },

    usuarioEhAnonimo: function() {
      var deferred = $q.defer();
      PerfilDoUsuario.then(function(perfil) {
        if (perfil.ehAnonimo()) {
          deferred.resolve(ControleDeAcesso.SUCESSO);
        } else {
          deferred.reject(ControleDeAcesso.NAOAUTORIZADO);
        }
      });
      return deferred.promise;
    },

    usuarioEstaAutenticado: function() {
      var deferred = $q.defer();
      PerfilDoUsuario.then(function(perfil) {
        if (perfil.estaAutenticado()) {
          deferred.resolve(ControleDeAcesso.SUCESSO);
        } else {
          deferred.reject(ControleDeAcesso.NAOAUTORIZADO);
        }
      });
      return deferred.promise;
    }

  };

  return ControleDeAcesso;

});