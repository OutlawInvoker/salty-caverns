(function() {
	'use strict';

	angular
		.module('app')
		.factory('Course', Course);

	Course.$inject = ['$resource'];
	function Course ($resource) {
		var CourseResource = $resource('/api/courses/:_id', {_id: "@id"}, {
			update: {
				method: 'PUT',
				isArray: false
			}
		});

		return CourseResource;
	}
})()