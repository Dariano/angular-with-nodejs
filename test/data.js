var MongoClient = require('mongodb').MongoClient;

var contatos = [{
	nome: 'Contato Angular 1',
	email: 'cont1@empresa.com.br'
}, {
	nome: 'Contato Angular 2',
	email: 'cont2@empresa.com.br'
}, {
	nome: 'Contato Angular 3',
	email: 'cont3@empresa.com.br'
}];

MongoClient.connect('mongodb://127.0.0.1:27017/mean_test', function(erro, db) {
	if (erro) throw erro;

	console.log('Banco apagado com sucesso');
	db.collection('contatos').insert(contatos, function(err, inserted) {
		if (err) {
			return console.log(err);
		}

		console.log('Banco populado com sucesso');

		process.exit(0);
	});
});