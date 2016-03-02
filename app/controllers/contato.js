var _contatos = [
	{ _id: 1, nome: 'Contato Angular 1', email: 'cont1@empresa.com.br' },
	{ _id: 2, nome: 'Contato Angular 2', email: 'cont2@empresa.com.br' },
	{ _id: 3, nome: 'Contato Angular 3', email: 'cont3@empresa.com.br' }
];

var user = {
  "name": "John Doe",
  "roles": ["ADMIN", "USER"],
  "anonymous": false
};

var ID_CONTATO_INC = 3;

module.exports = function (app) {
	var Contato = app.models.contato;
	var controller = {};
	
	controller.getUsuario = function(req, res){
		res.json(user);
	};
	
	controller.listaContatos = function (req, res) {
		res.json(_contatos);
//		Contato.find().exec()
//			.then(function (contatos) {
//				res.json(contatos);
//			}, function (erro) {
//				console.log(erro);
//				res.status(500).json(erro);
//			});
		
	};

	controller.obtemContato = function (req, res) {
		var _idContato = req.params.id;

		var contato = _contatos.filter(function(item){
			return item._id == _idContato;
		});

		if(!contato) throw new Error('Contato não encontado.')

		res.json(contato[0]);


//		Contato.findById(_idContato).exec()
//			.then(function (contato) {
//				if(!contato) throw new Error('Contato não encontado.')
//
//				res.json(contato);
//			},
//			function (erro) {
//				console.log(erro);
//				res.status(404).json(erro);
//			});
	};

	controller.removerContato = function (req, res) {
		var idContato = req.params.id;

		_contatos = _contatos.filter(function(item){
			return item._id != idContato;
		});

		res.status(204).end();

//		Contato.remove({'_id': idContato}).exec()
//			.then(function () {
//				res.status(204).end();
//			}, function (erro) {
//				console.log(erro);
//				res.status(404).json(erro);
//			});
	};

	controller.salvarContato = function (req, res) {
		var _idContato = req.body._id;

		if(_idContato){
			res.json(atualiza(req.body));
//			Contato.findByIdAndUpdate(_idContato, req.body).exec()
//				.then(function (contato) {
//					res.json(contato);
//				}, function (erro) {
//					console.log(erro);
//					res.status(500).json(erro);
//				});
		}else{
			res.status(201).json(adiciona(req.body));

//			Contato.create(req.body)
//				.then(function (contato) {
//					res.status(201).json(contato);
//				}, function (erro) {
//					console.log(erro);
//					res.status(500).json(erro);
//				});
		}
	};
	
	function adiciona(contatoNovo) {

		contatoNovo._id = ++ID_CONTATO_INC;	
		_contatos.push(contatoNovo);
		
		return contatoNovo;
	};
	
	function atualiza(contatoAlterado) {
		_contatos = _contatos.map(function (contato) {
			if(contato._id == contatoAlterado._id){
				contato = contatoAlterado;
			}
			 return contato;
		});
		
		return contatoAlterado;
	};

	return controller;
};

