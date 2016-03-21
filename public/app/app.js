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
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
		$routeProvider

			.when('/', {
				templateUrl: '/partials/main',
				controller: 'Main'
			});
	}

	// Controller Definition
	angular
		.module('app')
		.controller('Main', Main);

	Main.$inject = ['$scope'];
	function Main ($scope) {
		$scope.greeting = 'Hello Angular';
	}

})()