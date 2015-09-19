app.config(['dialogsProvider','$translateProvider',function(dialogsProvider,$translateProvider){
		dialogsProvider.setSize('sm');

		$translateProvider.translations('pt-br',{
			DIALOGS_OK: "Ok",
			DIALOGS_YES: "Sim",
			DIALOGS_NO: "Não"
		});
}]);