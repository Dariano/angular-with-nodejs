'use strict';

app.controller('contatoController', function ($routeParams, $location, ContatoAPI) {
	var self = this;
	self.mensagem = { texto: '' };

	if ($routeParams.contatoId) {
		ContatoAPI.get({ id: $routeParams.contatoId },
			function (contato) {
				self.contato = contato;
			},
			function (erro) {
				self.mensagem = {
					texto: 'Contato não existe. Novo contato.'
				};
			}
		);
	}
	else {
		this.contato = new ContatoAPI();
	}

	self.salvar = function () {
		this.contato.$save()
			.then(function (dado) {
				$location.path('/contatos');
			})
			.catch(function (erro) {
				self.mensagem = { texto: 'Não foi possível salvar' };
				console.log(erro);
			});
	};
});