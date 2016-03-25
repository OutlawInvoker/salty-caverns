(function () {
	'use strict';

	// Main Module Definition
	angular.module('app', [
		'ngResource',
		'ngRoute'
	]);

	// Route Config Definition
	angular
		.module('app')
		.config(Router);

	Router.$inject = ['$routeProvider', '$locationProvider'];
	function Router ($routeProvider, $locationProvider) {
		var roleCheck = {
			admin: {				
				auth: ['Auth', function(Auth) {
					return Auth.authForRoute('admin');
				}]				
			},
			user: {				
				auth: ['Auth', function(Auth) {
					return Auth.authUser();
				}]				
			}
		}

		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
		$routeProvider

			.when('/', {
				templateUrl: '/partials/main/main',
				controller: 'Main'
			})
			.when('/admin/users', {
				templateUrl: '/partials/admin/user-list',
				controller: 'UserList',
				resolve: roleCheck.admin
			})
			.when('/signup', {
				templateUrl: '/partials/account/signup',
				controller: 'SignUp'
			})
			.when('/profile', {
				templateUrl: '/partials/account/profile',
				controller: 'Profile',
				resolve: roleCheck.user
			});
	}

	// App Run Config
	angular
		.module('app')
		.run(AppRun);

	AppRun.$inject = ['$rootScope', '$location'];
	function AppRun($rootScope, $location) {
		$rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
			if(rejection === 'not authorized') {
				$location.path('/');
			}
		});
	}

})()