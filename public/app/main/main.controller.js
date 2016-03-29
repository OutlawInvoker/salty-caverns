(function () {
  'use strict';

  angular
    .module('app')
    .controller('Main', Main);

  Main.$inject = ['$scope', 'CachedCourses'];
  function Main ($scope, CachedCourses) {
    $scope.courses = CachedCourses.query();
  }

})()