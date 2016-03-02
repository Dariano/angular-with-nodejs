describe('Ao adicionar contato', function(){

	beforeEach(function () {
		browser.get('#/contato');
	});
	
	it('deve voltar para a tela de contatos, quando clicar no botão voltar', function(){
		
		element(by.css('.btn.btn-default')).click();
		
		expect(browser.getCurrentUrl()).toContain('/#/contatos');
	});
		
	it('não deve salvar o contato se o nome não tiver preenchidos', function(){
		
		var email = element(by.model('ctrl.contato.email'));
		email.sendKeys('dariano@outlook.com');
		
		element(by.css('.btn-primary')).click();
		
		expect(browser.getCurrentUrl()).toContain('/#/contato');
	});
	
	it('não deve salvar o contato se o email não tiver preenchidos', function(){
		
		var nome = element(by.model('ctrl.contato.nome'));
		nome.sendKeys('dariano');
		
		element(by.css('.btn-primary')).click();
		
		expect(browser.getCurrentUrl()).toContain('/#/contato');
	});
	
	it('não deve salvar o contato se o nome e email não tiver preenchidos', function(){
		
		element(by.css('.btn-primary')).click();
		
		expect(browser.getCurrentUrl()).toContain('/#/contato');
	});
	
	it('deve adicionar um novo contato', function(){
		
		var nome = element(by.model('ctrl.contato.nome'));
		var email = element(by.model('ctrl.contato.email'));
		
		nome.sendKeys('dariano');
		email.sendKeys('dariano@outlook.com');
		
		element(by.css('.btn-primary')).click();
		
		expect(browser.getCurrentUrl()).toContain('/#/contatos');
		
	});
});