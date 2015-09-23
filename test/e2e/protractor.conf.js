exports.config = {
  // O endereço de um servidor Seleniun em execução
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // A URL em que o servidor que estaremos testando está executando.
  baseUrl: 'http://localhost:3000/',

  // Recursos a serem passadas á instância do WebDriver
  capabilities: {
    'browserName': 'chrome'
  },

  // Os padrões de especificações são relativos á lacalização do 
  // arquivo de especificação. Padrões globais poderão ser incluídos.
  specs: ['*Spec*.js'],

  // Opções a serem passadas para o Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use cores no relatório da linha de comando.
  }
};