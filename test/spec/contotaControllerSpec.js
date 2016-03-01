describe('ContotaController', function() {

	var ctrl;

	beforeEach(module('mean'));

	beforeEach(function() {
		inject(function($rootScope, $controller) {
			var scope = $rootScope.$new();

			ctrl = $controller('contatoController', {
				"$scope": scope
			});
		});
	});

	it('Deve criar um contato vazio quando nenhum parâmetro de rota for passado',
		inject(function() {
			expect(ctrl.contato._id).toBeUndefined();
		}));
});