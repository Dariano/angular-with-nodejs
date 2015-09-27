describe('Na lista de contatos', function(){
	
	it('ao clicar no botão novo contato, deve ser direcionado para o cadastro de contato', function(){
		browser.get('#/contatos');
		
		element(by.css('.btn.btn-primary')).click();
		
		expect(browser.getCurrentUrl()).toContain('/#/contato');
	});
	
	it('deve filtrar pelo nome', function(){
		browser.get('#/contatos');
		
		var filtro = element(by.model('ctrl.filtro'));
		filtro.sendKeys('dariano');
		
		var linhas = element.all(
			by.repeater('contato in ctrl.contatos')
		);
		
		expect(linhas.count()).toEqual(1);
	});	
	
	it('deve mostrar os contatos cadastrados', function() {
		browser.get('#/contatos');
		
		var linhas = element.all(
			by.repeater('contato in ctrl.contatos')
		);
		
		expect(linhas.count()).toEqual(4);		
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