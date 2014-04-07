'use strict';

angular.module('App')
  .controller('BaseProductCtrl', function ($scope, baseProducts, models) {
    
    $scope.baseProducts = baseProducts;
    
    var copy_baseProducts = {}
    
    $scope.edit = function(idx) {
      copy_baseProducts[idx] = {};
      angular.copy($scope.baseProducts[idx], copy_baseProducts[idx]);
      $scope.baseProducts[idx].mode = 'edit';
    }
    
    $scope.cancel = function(idx) {
      angular.copy(copy_baseProducts[idx], $scope.baseProducts[idx]);
      delete $scope.baseProducts[idx].mode;
    }
    
    $scope.save = function(idx) {
      delete $scope.baseProducts[idx].mode;
      $scope.baseProducts[idx].save().done();
    }
    
    $scope.create = function() {
      var baseProduct = models.baseProduct.create();
      baseProduct.mode = "edit";
      $scope.baseProducts.push(baseProduct);
    }
    
    $scope.delete = function(idx) {
      $scope.baseProducts[idx].remove().done();
      $scope.baseProducts.splice(idx, 1);
    }
    
    $scope.removeVersion = function(baseProduct_idx, version_idx) {
      $scope.baseProducts[baseProduct_idx].versions.splice(version_idx, 1);
    }
    
  });
