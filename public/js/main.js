'use strict';

/* global angular */
var app = angular.module('mean', ['ngRoute', 'ngResource', 'ui.bootstrap', 'dialogs.main']);

app.config(function ($routeProvider) {
	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'contatosController'
	})
	.when('/contato/:contatoId', {
		templateUrl: 'partials/contato.html',
		controller: 'contatoController'
	})
	.when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'contatoController',
		resolve:{
			acesso:function(ControleDeAcesso){ return ControleDeAcesso.usuarioTem('ADMIN2')}
		}
	})
	.otherwise({redirectTo: '/contatos'});
});

app.config(['dialogsProvider','$translateProvider',function(dialogsProvider,$translateProvider){
		dialogsProvider.setSize('sm');

		$translateProvider.translations('pt-br',{
			DIALOGS_OK: "Ok",
			DIALOGS_YES: "Sim",
			DIALOGS_NO: "Não"
		});
}])