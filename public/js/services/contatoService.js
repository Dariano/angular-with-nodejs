app.factory('ContatoAPI', function ($resource) {
	return $resource('/contatos/:id');
});