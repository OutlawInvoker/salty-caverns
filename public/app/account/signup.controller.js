(function () {
  'use strict';

  angular
    .module('app')
    .controller('SignUp', SignUp);

  SignUp.$inject = ['$scope', '$http', 'Notifier', 'mvUser', 'Auth', '$location'];
  function SignUp ($scope, $http, Notifier, mvUser, Auth, $location) {
    
    $scope.signup = function() {
      var data = {
        username: $scope.email,
        password: $scope.password,
        firstName: $scope.fname,
        lastName: $scope.lname
      };

      Auth.createUser(data).then(function(){
        Notifier.notify("User account created!");
        $location.path("/");
      }, function(reason) {
        Notifier.error(reason);
      })
    }
  }

})()