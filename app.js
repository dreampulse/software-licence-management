'use strict';

// hier wird gesagt: wenn URL x geöffnet wird, dann view anzeigen
angular.module('App', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
        //controller: 'MainCtrl'
      })
      .when('/inhalt1', {
        templateUrl: 'views/inhalt1.html'
        //controller: 'Inhalt1Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
