describe('Usuario do sistema', function(){
	
	it('deve mostrar os contatos cadastrados', function() {
		browser.get('#/contatos');
		
		var linhas = element.all(
			by.repeater('contato in ctrl.contatos')
		);
		
		expect(linhas.count()).toEqual(3);
		
	});
	
	it('deve adicionar um novo contato', function(){
		browser.get('#/contato');
		
		var nome = element(by.model('ctrl.contato.nome'));
		var email = element(by.model('ctrl.contato.email'));
		
		nome.sendKeys('dariano');
		email.sendKeys('dariano@outlook.com');
		
		element(by.css('.btn-primary')).click();
		
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/contatos');
		
	});
	
	it('deve remover o contato requerido', function(){
		browser.get('#/contatos');
		
		var linhas = element.all(
			by.repeater('contato in ctrl.contatos')
		);		
		
		var ultimaLinha = element(by.repeater('contato in ctrl.contatos').row(3))
		ultimaLinha.element(by.css('.btn-warning')).click();
		
		element(by.css('button.btn-default.ng-binding')).click();
		
		expect(linhas.count()).toEqual(3);
		
	});
	
});