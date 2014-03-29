'use strict';

angular.module('App')
  .controller('LicenceCtrl', function ($scope, licences, models) {
    
    $scope.licences = licences;
    
    var copy_licence = {}
    
    $scope.edit = function(idx) {
      copy_licence[idx] = {};
      angular.copy($scope.licences[idx], copy_licence[idx]);
      $scope.licences[idx].mode = 'edit';
    }
    
    $scope.cancel = function(idx) {
      angular.copy(copy_licence[idx], $scope.licences[idx]);
      delete $scope.licences[idx].mode;
    }
    
    $scope.save = function(idx) {
      delete $scope.licences[idx].mode;
      $scope.licences[idx].save().done();
    }
    
    $scope.create = function() {
      var licence = models.Licence.create();
      licence.mode = "edit";
      $scope.licences.push(licence);
    }
    
    $scope.delete = function(idx) {
      $scope.licences[idx].remove().done();
      $scope.licences.splice(idx, 1);
    }
    
    $scope.removeVersion = function(licence_idx, version_idx) {
      $scope.licences[licence_idx].versions.splice(version_idx, 1);
    }
    
  });
