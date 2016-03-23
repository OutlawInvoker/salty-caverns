(function() {
	'use strict';

	angular
		.module('app')
		.factory('Auth', Auth);

	Auth.$inject = ['$http', 'Identity', '$q', 'mvUser'];
	function Auth($http, Identity, $q, mvUser) {
		return {
			authenticate: function(username, password) {
				var deferred = $q.defer();
				$http.post('/login', {username:username, password:password})
					.then(function (response) {
						if(response.data.success) {
							var user = new mvUser();
							angular.extend(user, response.data.user);
							Identity.currentUser = user;
							deferred.resolve(true);
						} else {
							deferred.resolve(false);
						}
					});

				return deferred.promise;
			},
			logout: function() {
				var deferred = $q.defer();
				$http.post('/logout', {logout: true})
					.then(function () {
							Identity.currentUser = undefined;
							deferred.resolve();
					});

				return deferred.promise;
			},
			authForRoute: function(role) {
				if(Identity.isAuthorized(role)) {
					return true;
				} else {
					return $q.reject('not authorized');
				}
			}
		}
	}
})()