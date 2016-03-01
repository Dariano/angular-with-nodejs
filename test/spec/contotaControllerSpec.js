describe('ContotaController', function() {
	var $scope;
	var $httpBackend;

	beforeEach(module('mean'));

	beforeEach(function() {
		inject(function(_$rootScope_, _$httpBackend_) {
			$scope = _$rootScope_.$new();
			$httpBackend = _$httpBackend_;

			$httpBackend.when('GET', '/contatos/1').respond({ _id: '1'});
			$httpBackend.when('GET', '/contatos').respond([{}]);
			$httpBackend.when('GET', '/user').respond({ roles: ['ADMIN']});
		});
	});

	it('Deve criar um contato vazio quando nenhum parâmetro de rota for passado',
		inject(function ($controller) {
			var ctrl = $controller('contatoController', {
				'$scope': $scope
			});

			expect(ctrl.contato._id).toBeUndefined();
		}));

	it('Deve preencher o Contato quando parâmetro de rota for passado',
		inject(function ($controller) {
			var ctrl = $controller('contatoController', {
				$routeParams: { contatoId: 1 },
				'$scope': $scope
			});

			$httpBackend.flush();

			expect(ctrl.contato._id).toBeDefined();
			expect(ctrl.contato._id).toBe('1');
		}));
});