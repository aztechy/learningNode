'use strict'

angular.module('learningApp', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/view1', {
				templateUrl: '/partials/partial1.jade',
				controller: 'Controller1'
			}).
			when('/view2', {
				templateUrl: '/partials/partial2.jade',
				controller: 'Controller2'
			}).
			otherwise({redirectTo: '/view1'});
	});