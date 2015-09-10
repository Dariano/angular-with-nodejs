module.exports = function (app) {
	var controller = app.controllers.contato;
	console.log('app.controllers.contato');
	app.route('/contatos')
		.get(controller.listaContatos)
		.post(controller.salvarContato);
		
	app.route('/contatos/:id')
		.get(controller.obtemContato)
		.delete(controller.removerContato);
		
	app.route('/user')
		.get(controller.getUsuario);
};