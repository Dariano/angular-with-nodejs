
app.controller('contatosController', function ($resource, ContatoAPI, dialogs) {
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
		
		var confirmar = dialogs.confirm('Remover contato', 'Deseja remover o contato?');
		confirmar.result.then(function(btn){
			ContatoAPI.delete({ id: contato._id },
				buscarContatos,
				function (erro) {
					self.mensagem.texto = 'Não foi possível remover o contato';
					console.log(erro);
				}
			);
		});	
	};
});