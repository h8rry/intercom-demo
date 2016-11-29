app.controller('IndexCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
  console.log("index controller");

  window.Intercom('update');
}]);
