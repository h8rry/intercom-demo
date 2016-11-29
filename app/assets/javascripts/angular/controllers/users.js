app.controller('UsersCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
  console.log("users controller");

  window.Intercom('update');
}]);
