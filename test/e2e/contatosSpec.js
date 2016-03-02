var ContatosPage = require('./pages/contatosPage');

describe('Na lista de contatos', function() {

	beforeEach(function() {
		ContatosPage.visitar();
	});

	/*it('deve filtrar pelo nome', function() {

		ContatosPage.filtrarPor('dariano');

		var contatosRetornado = ContatosPage.todos().count();
		var contatosEsperado = 1;

		expect(contatosRetornado).toEqual(contatosEsperado);
	});*/

	it('deve mostrar os contatos cadastrados', function() {

		var contatosCadastrados = ContatosPage.todos().count();
		var contatosEsperado = 4;

		expect(contatosCadastrados).toEqual(contatosEsperado);
	});

	it('deve remover o contato requerido', function() {

		var totalAntes = ContatosPage.todos().count();

		ContatosPage.remover(0);

		var totalDepois = ContatosPage.todos().count();

		expect(totalDepois).toBeLessThan(totalAntes);
	});

	it('ao clicar no botão novo contato, deve ser direcionado para o cadastro de contato', function() {

		ContatosPage.novo();

		var urlEsperada = '/#/contato';
		var urlCorrente = browser.getCurrentUrl();

		expect(urlCorrente).toContain(urlEsperada);
	});
});