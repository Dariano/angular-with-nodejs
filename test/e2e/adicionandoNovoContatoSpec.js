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
		
		nome.sendKeys('darinao');
		email.sendKeys('dariano@outlook.com');
		
		element(by.css('.btn-primary')).click();
		
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/contatos');
		
	});
	
});