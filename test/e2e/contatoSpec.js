var ContatoPage = require('./pages/contatoPage');

describe('Ao adicionar contato', function(){

	beforeEach(function () {
		ContatoPage.visitar()
	});
	
	it('deve voltar para a tela de contatos, quando clicar no botão voltar', function(){
		
		ContatoPage.voltarParaContatos();

		var urlCorrente = browser.getCurrentUrl();
		var urlEsperada = '/#/contatos'
		
		expect(urlCorrente).toContain(urlEsperada);
	});
		
	it('não deve salvar o contato se o nome não tiver preenchidos', function(){
		
		ContatoPage.digitarEmail('dariano@outlook.com');
		
		ContatoPage.salvar();

		var urlCorrente = browser.getCurrentUrl();
		var urlEsperada = '/#/contato'
		
		expect(urlCorrente).toContain(urlEsperada);
	});
	
	it('não deve salvar o contato se o email não tiver preenchidos', function(){
		
		ContatoPage.digitarNome('dariano');
		
		ContatoPage.salvar();
		
		var urlCorrente = browser.getCurrentUrl();
		var urlEsperada = '/#/contato'
		
		expect(urlCorrente).toContain(urlEsperada);
	});
	
	it('não deve salvar o contato se o nome e email não tiver preenchidos', function(){
		
		ContatoPage.digitarNome('');
		ContatoPage.digitarEmail('');

		ContatoPage.salvar();
		
		var urlCorrente = browser.getCurrentUrl();
		var urlEsperada = '/#/contato'
		
		expect(urlCorrente).toContain(urlEsperada);
	});
	
	it('deve adicionar um novo contato', function(){

		ContatoPage.digitarNome('dariano');
		ContatoPage.digitarEmail('dariano@outlook.com');
		
		ContatoPage.salvar();
		
		var urlCorrente = browser.getCurrentUrl();
		var urlEsperada = '/#/contatos'
		
		expect(urlCorrente).toContain(urlEsperada);		
	});
});