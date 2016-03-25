(function () {
  'use strict';

  angular
    .module('app')
    .controller('Profile', Profile);

  Profile.$inject = ['$scope', '$http', 'Notifier', 'Identity', 'Auth', '$location'];
  function Profile ($scope, $http, Notifier, Identity, Auth, $location) {
    $scope.email = Identity.currentUser.username;
    $scope.fname = Identity.currentUser.firstName;
    $scope.lname = Identity.currentUser.lastName;

    $scope.update = function() {
      var data = {
        username: $scope.email,
        firstName: $scope.fname,
        lastName: $scope.lname
      };

      if($scope.password && $scope.password.length > 0) {
        data.password = $scope.password;
      }

      Auth.updateUser(data).then(function(){
        Notifier.notify("User account updated!");
      }, function(reason) {
        Notifier.error(reason);
      })
    }
  }

})()