(function() {
	'use strict';

	angular
		.module('app')
		.factory('CachedCourses', CachedCourses);

	CachedCourses.$inject = ['Course'];
	function CachedCourses (Course) {
		var courseList;

		return {
			query: function() {
				if(!courseList) {
					courseList = Course.query();
				}

				return courseList;
			}
		}
	}
})()