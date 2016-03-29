(function () {
	'use strict';

	angular
		.module('app')
		.controller('CourseList', CourseList);

	CourseList.$inject = ['$scope', 'CachedCourses'];
	function CourseList($scope, CachedCourses) {
		$scope.courses = CachedCourses.query();

		$scope.sortOptions = [
			{
				value: "title",
				text: "Sort by Title"
			},
			{
				value: "published",
				text: "Sort by Published Date"
			}
		];
		$scope.sortOrder = $scope.sortOptions[0].value;
	}
})()