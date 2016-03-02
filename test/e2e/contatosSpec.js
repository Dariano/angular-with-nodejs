var ContatoPage = require('./pages/contatoPage');

describe('Na lista de contatos', function(){
	
	beforeEach(function () {
		ContatoPage.visitar();
	});

	it('ao clicar no botão novo contato, deve ser direcionado para o cadastro de contato', function(){
		
		ContatoPage.novo();

		var urlEsperada = '/#/contato';
		var urlCorrente = browser.getCurrentUrl(); 

		expect(urlCorrente).toContain(urlEsperada);
	});
	
	it('deve filtrar pelo nome', function(){
		
		ContatoPage.filtrarPor('dariano')
		
		var contatos = ContatoPage.todosContatos();
		var contatosFiltrado = 1;
		
		expect(contatos.count()).toEqual(contatosFiltrado);
	});	
	
	it('deve mostrar os contatos cadastrados', function() {
		
		var contatos = ContatoPage.todosContatos();
		var contatosEsperado = 4;
		
		expect(contatos.count()).toEqual(contatosEsperado);		
	});
	
	it('deve remover o contato requerido', function(){
		
		var totalAntes = ContatoPage.todosContatos().count();
		
		var ultimaLinha = totalAntes;

		ContatoPage.remover(ultimaLinha);
		
		var totalDepois = ContatoPage.todosContatos();

		expect(totalDepois).toBeLessThan(totalAntes);		
	});	
});