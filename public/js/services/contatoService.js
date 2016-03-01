app.factory('ContatoAPI', function ($resource) {
	return $resource('http://jsonplaceholder.typicode.com/posts/');
});