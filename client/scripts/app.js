var mainApp = angular.module('mainApp', []);

mainApp.controller('TestController', ['$scope', function($scope){
  console.log("TestController firing");
  $scope.test = "Test of the controller connection."
}]);
