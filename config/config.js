module.exports = function() {
	console.log('process.env.NODE_ENV', process.env.NODE_ENV);
	return require('./env/' + process.env.NODE_ENV + '.js');
};