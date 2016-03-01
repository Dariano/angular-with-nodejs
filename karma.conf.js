// Karma configuration
// Generated on Tue Sep 15 2015 23:33:43 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    // path de base que será usado para resolver os nomes dos arquivos e efetuar exclusões.
    basePath: '',


    // frameworks to use  available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks de testes a ser usado [jasmine/mocha/qunit/...]
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // lista de aquivos/padrões a serem carregados no navegador
    files: [
      'public/vendor/angular/angular.js',
      'public/vendor/angular-mocks/angular-mocks.js',
      'public/vendor/angular-resource/angular-resource.js',
      'public/vendor/angular-route/angular-route.js',
      'public/vendor/angular-dialog-service/dist/dialogs.js',
      'public/vendor/angular-sanitize/angular-sanitize.min.js',
      'public/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'public/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'public/js/main.js',
      'public/js/controllers/*.js',
      'public/js/services/*.js',
      'public/js/configs/*.js',
      'public/js/eventos/*.js',
      'test/spec/*Spec.js'
    ],


    // list of files to exclude
    // lista de arquivos/padrões a serem excluídos
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
