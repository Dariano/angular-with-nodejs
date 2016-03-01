var http = require('http');
var app = require('./config/express')();
//require('./config/database.js')('mongodb://localhost/mean');

http.createServer(app)
	.listen(app.get('port'), function() {
		console.log('Servidor executando na porta: ' + app.get('port'));
	});