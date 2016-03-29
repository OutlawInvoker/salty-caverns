(function () {
	'use strict';

	angular
		.module('app')
		.controller('CourseDetail', CourseDetail);

	CourseDetail.$inject = ['$scope', 'CachedCourses', '$routeParams'];
	function CourseDetail($scope, CachedCourses, $routeParams) {
		CachedCourses.query().$promise.then(function(collection) {
			collection.forEach(function(course) {
				if(course._id === $routeParams.id) {
					$scope.course = course;
				}
			})
		});
	}
})()