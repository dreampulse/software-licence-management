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
      .when('/baseProduct', {
        templateUrl: 'baseProduct/view.html',
        controller: 'BaseProductCtrl',
        resolve: {
          baseProducts: ['models', function (models) {
            var Q = require("q");
            var baseProduct;
            return models.BaseProduct.all()
              .then(function(product) {
                baseProduct = product;
                var promises = [];
                for (var j=0; j<product.length; j++) {
                  for (var i=0; i<product[j].versions.length; i++) {
                    promises.push(product[j].versions[i].licence.load());
                  }
                }
                return Q.all(promises);
              })
              .then(function(all) {
                return baseProduct;
              })
              .fail(function(err) {
                console.log("err", err);
              });
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
