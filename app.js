'use strict';

// hier wird gesagt: wenn URL x geöffnet wird, dann view anzeigen
angular.module('App', ['ngRoute', 'modelizer'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html'
        //controller: 'MainCtrl'
      })
      .when('/licence', {
        templateUrl: 'licence/view.html',
        controller: 'LicenceCtrl',
        resolve: {
          licences: ['models', function (models) {
            return models.Licence.all();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
    })
  .run(function ($rootScope, models) {
    $rootScope.models = models;
    console.log("debug with:", "var models = angular.element(document.querySelector('body')).injector().get('models')");  
    
    var modelizer = require('modelizer');
    var connector = modelizer.ClientConnector("localhost", 8080);

    _.forEach(models, function (model) {
      model.connection(connector);
    });
    
  });
