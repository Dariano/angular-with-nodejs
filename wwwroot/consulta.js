var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('557dee6f69a26bca62e64b44');

MongoClient.connect('mongodb://127.0.0.1:27017/mean',
	function (erro, db) {
		if(erro) throw erro;
		
		db.collection('contatos').findOne({_id: _idProcurado},
			function (erro, contato) {
				if(erro) throw erro;
				console.log(contato);
			});
	});
	