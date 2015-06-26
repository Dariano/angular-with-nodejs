app.factory('ContatoAPI', ["$resource", function ($resource) {
	return $resource('/contatos/:id');
}]);