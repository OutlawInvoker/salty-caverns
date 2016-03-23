(function () {
  'use strict';

  angular
    .module('app')
    .controller('Login', Login);

  Login.$inject = ['$scope', '$http', 'Notifier', 'Identity', 'Auth', '$location'];
  function Login ($scope, $http, Notifier, Identity, Auth, $location) {
    $scope.identity = Identity;
    
    $scope.signIn = function (username, password) {
      Auth.authenticate(username, password).then(function(success) {
        if(success) {
          Notifier.notify('You have successfully signed in!');
        } else {
          Notifier.notify('Username/Password combination incorrect!');
        }
      });
    }

    $scope.signOut = function() {
      Auth.logout().then(function () {
        $scope.username = "";
        $scope.password = "";
        Notifier.notify('You have successfully signed out!');
        $location.path('/')
      });
    }
  }

})()