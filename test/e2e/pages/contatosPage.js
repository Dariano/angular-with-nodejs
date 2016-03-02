var ContatosPage = function() {

	this.visitar = function() {
		browser.get('#/contatos');
	};

	this.filtrarPor = function(textoFiltro) {
		element(by.model('ctrl.filtro')).sendKeys(textoFiltro);
	};

	this.todos = function() {
		return element.all(
			by.repeater('contato in ctrl.contatos')
		);
	};

	this.remover = function(linha) {
		var linhaSelecionada = element(by.repeater('contato in ctrl.contatos').row(linha));
		linhaSelecionada.element(by.css('.btn-warning')).click();

		element(by.css('button.btn-default.ng-binding')).click();
	};

	this.novo = function() {
		element(by.css('.btn.btn-primary')).click();
	}
}

module.exports = new ContatosPage();