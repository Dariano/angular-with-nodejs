var ContatoPage = function() {

	this.visitar = function() {
		browser.get('#/contato');
	};

	this.digitarNome = function(nome) {
		element(by.model('contato.nome')).sendKeys(nome);
	};

	this.digitarEmail = function(email) {
		element(by.model('contato.email')).sendKeys(email);
	};

	this.salvar = function() {
		element(by.css('.btn-primary')).click();
	};

	this.novo = function() {
		element(by.css('.btn.btn-primary')).click();
	}

	this.obterMensagem = function() {
		return element(by.binding('mensagem.texto')).getText();
	};

	this.selecionarPrimeiraEmergenciaDaLista = function() {
		element(by.css('options[value=0]')).click();
	};

	this.filtrarPor = function(textoFiltro) {
		element(by.model('ctrl.filtro')).sendKeys(textoFiltro);
	};

	this.todosContatos = function() {
		return element.all(
			by.repeater('contato in ctrl.contatos')
		);
	};

	this.remover = function(linha) {
		var linhaSelecionada = element(by.repeater('contato in ctrl.contatos').row(linha));
		linhaSelecionada.element(by.css('.btn-warning')).click();

		element(by.css('button.btn-default.ng-binding')).click();
	};
}

module.exports = new ContatoPage();