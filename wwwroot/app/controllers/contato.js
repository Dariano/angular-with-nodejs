var contatos = [
	{ _id: 1, nome: 'Contato Angular 1', email: 'cont1@empresa.com.br' },
	{ _id: 2, nome: 'Contato Angular 2', email: 'cont2@empresa.com.br' },
	{ _id: 3, nome: 'Contato Angular 3', email: 'cont3@empresa.com.br' }
];

var ID_CONTATO_INC = 3;

module.exports = function (app) {
	var Contato = app.models.contato;
	var controller = {};
	
	controller.listaContatos = function (req, res) {
		Contato.find().exec()
			.then(function (contatos) {
				res.json(contatos);
			}, function (erro) {
				console.log(erro);
				res.status(500).json(erro);
			});
		
	};

	controller.obtemContato = function (req, res) {
		var _idContato = req.params.id;
		
		Contato.findById(_idContato).exec()
			.then(function (contato) {
				if(!contato) throw new Error('Contato não encontado.')
				
				res.json(contato);
			},
			function (erro) {
				console.log(erro);
				res.status(404).json(erro);
			});
	};

	controller.removerContato = function (req, res) {
		var idContato = req.params.id;
		
		Contato.remove({'_id': idContato}).exec()
			.then(function () {
				res.status(204).end();
			}, function (erro) {
				console.log(erro);
				res.status(404).json(erro);
			});
	};

	controller.salvarContato = function (req, res) {
		var _idContato = req.body._id;
		if(_idContato){
			Contato.findByIdAndUpdate(_idContato, req.body).exec()
				.then(function (contato) {
					res.json(contato);
				}, function (erro) {
					console.log(erro);
					res.status(500).json(erro);
				});
		}else{
			Contato.create(req.body)
				.then(function (contato) {
					res.status(201).json(contato);
				}, function (erro) {
					console.log(erro);
					res.status(500).json(erro);
				});
		}
	};
	
	function adiciona(contatoNovo) {
		contatoNovo._id = ++ID_CONTATO_INC;	
		contatos.push(contatoNovo);
		
		return contatoNovo;
	};
	
	function atualiza(contatoAlterado) {
		contatos = contatos.map(function (contato) {
			if(contato._id == contatoAlterado._id){
				contato = contatoAlterado;
			}
			 return contato;
		});
		
		return contatoAlterado;
	};

	return controller;
};

