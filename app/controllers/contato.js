var ID_CONTATO_INC = 3;

module.exports = function(app) {
	var Contato = app.models.contato;
	var controller = {};

	controller.getUsuario = function(req, res) {
		res.json(user);
	};

	controller.listaContatos = function(req, res) {
		Contato.find().exec()
			.then(function(contatos) {
				res.json(contatos);
			}, function(erro) {
				console.log(erro);
				res.status(500).json(erro);
			});

	};

	controller.obtemContato = function(req, res) {
		var _idContato = req.params.id;

		var contato = _contatos.filter(function(item) {
			return item._id == _idContato;
		});

		if (!contato) throw new Error('Contato não encontado.')

		Contato.findById(_idContato).exec()
			.then(function(contato) {
					if (!contato) throw new Error('Contato não encontado.')

					res.json(contato);
				},
				function(erro) {
					console.log(erro);
					res.status(404).json(erro);
				});
	};

	controller.removerContato = function(req, res) {
		var idContato = req.params.id;

		Contato.remove({
				'_id': idContato
			}).exec()
			.then(function() {
				res.status(204).end();
			}, function(erro) {
				console.log(erro);
				res.status(404).json(erro);
			});
	};

	controller.salvarContato = function(req, res) {
		var _idContato = req.body._id;

		console.log('headers', req.headers['content-type']);
		console.log('contato novo', req.body);

		if (_idContato) {
			Contato.findByIdAndUpdate(_idContato, req.body).exec()
				.then(function(contato) {
					res.json(contato);
				}, function(erro) {
					console.log(erro);
					res.status(500).json(erro);
				});
		} else {
			Contato.create(req.body)
				.then(function(contato) {
					res.status(201).json(contato);
				}, function(erro) {
					console.log(erro);
					res.status(500).json(erro);
				});
		}
	};

	return controller;
};