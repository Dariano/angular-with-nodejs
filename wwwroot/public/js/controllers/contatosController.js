
app.controller('contatosController', ["$resource", "ContatoAPI", function ($resource, ContatoAPI) {
	var self = this;
	self.contatos = [];
	self.filtro = '';
	self.mensagem = { texto: '' };

	function buscarContatos() {
		ContatoAPI.query(function (contatos) {
			self.contatos = contatos;
		}, function (erro) {
			self.mensagem.texto = 'Não foi possível obter a lista de contatos';				
		});
	};

	buscarContatos();

	self.remove = function (contato) {
		ContatoAPI.delete({ id: contato._id },
			buscarContatos,
			function (erro) {
				self.mensagem.texto = 'Não foi possível remover o contato';
				console.log(erro);
			}
		);
	};
}]);