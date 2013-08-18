'use strict'

angular.module('learningApp', []).
	config(function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/feedManager', {
				templateUrl: '/partials/feedManager',
				controller: 'Controller1'
			}).
			when('/view2', {
				templateUrl: '/partials/partial2',
				controller: 'Controller2'
			}).
			otherwise({redirectTo: '/feedManager'});

		// Turns hash tag url off
		$locationProvider.html5Mode(true);
	});