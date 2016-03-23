(function () {
	'use strict';

	angular
		.module('app')
		.controller('UserList', UserList);

	UserList.$inject = ['$scope', 'mvUser'];
	function UserList($scope, mvUser) {
		$scope.users = mvUser.query();
	}
})()