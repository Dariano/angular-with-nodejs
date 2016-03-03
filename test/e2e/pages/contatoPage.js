var mongoose = require('mongoose');

console.log(config);

var ContatoPage = function() {

	this.visitar = function() {
		browser.get('#/contato');
	};

	this.voltarParaContatos = function() {
		element(by.css('.btn.btn-default')).click();
	}

	this.digitarNome = function(nome) {
		element(by.model('ctrl.contato.nome')).sendKeys(nome);
	};

	this.digitarEmail = function(email) {
		element(by.model('ctrl.contato.email')).sendKeys(email);
	};

	this.salvar = function() {
		element(by.css('.btn-primary')).click();
	};

	this.obterMensagem = function() {
		return element(by.binding('ctrl.mensagem.texto')).getText();
	};

	this.selecionarPrimeiraEmergenciaDaLista = function() {
		element(by.css('options[value=0]')).click();
	};
}

module.exports = new ContatoPage();