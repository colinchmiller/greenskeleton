var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/library', {
      templateUrl: 'assets/views/routes/library.html',
      controller: 'LibraryController'
    })
}]);

mainApp.controller('TestController', ['$scope', function($scope){
  console.log("TestController firing");
  $scope.test = "Test of the controller connection."
}]);

mainApp.controller('LibraryController', ['$scope', function($scope){
  console.log("LibraryController firing");
  $scope.test = "Plant library route functioning."
}]);
