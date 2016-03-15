var config = require('./config');

exports.config = {
  sauceUser: config.sauceUser,
  sauceKey: config.souceKey,

  // O endereço de um servidor Seleniun em execução
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // seleniumServerJar: './../node_modules/grunt-selenium-webdriver/jar/selenium-server-standalone-2.48.2.jar',
  seleniumServerJar: './../node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',

  // The port to start the selenium server on, or null if the server should
  // find its own unused port.
  seleniumPort: 4444,
  directConnect: true,

  // A URL em que o servidor que estaremos testando está executando.
  baseUrl: 'http://localhost:3000/',

  // Recursos a serem passadas á instância do WebDriver
  capabilities: {
    //'name': config.souceTestName,
    'browserName': 'chrome',
    chromeOptions: {
      binary: '/usr/bin/google-chrome',
      args: [],
      extensions: [],
    }
    //'tunnel-identifier': config.travisJobNumber,
    //'build': config.travisBuild,
  },

  // Os padrões de especificações são relativos á lacalização do 
  // arquivo de especificação. Padrões globais poderão ser incluídos.
  specs: ['../test/e2e/*.js'],

  // args: {
  //   directConnect: true
  // },

  rootElement: 'html',

  /*onPrepare: function () {
    browser.driver.get('http://localhost:3000')
    browser.driver.findElement(by.id('entrar')).click();
    browser.driver.findElement(by.id('login_field')).sendKeys('email-de-teste');
    browser.driver.findElement(by.id('password')).sendKeys('senha-do-email-de-teste');
    browser.driver.findElement(by.name('commit')).click();
  }*/

  // Opções a serem passadas para o Jasmine-node.
  jasmineNodeOpts: {
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000,
    showColors: true // Use cores no relatório da linha de comando.
  }
};