(function () {
	'use strict';

	angular
		.module('app')
		.factory('Identity', Identity);

	Identity.$inject = ['$window','mvUser'];
	function Identity($window, mvUser) {
		var currentUser;
		if(!!$window.bootstrappedUserObject) {
			currentUser = new mvUser();
			angular.extend(currentUser, $window.bootstrappedUserObject);
		}

		return {
			currentUser: currentUser,
			isAuthenticated: function() {
				return !!this.currentUser;
			},
			isAuthorized: function(role) {
				return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
			}
		}
	}
})()