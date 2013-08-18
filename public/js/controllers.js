'use strict'

var Controller1 = function($scope) {
	console.log('Controller 1 loaded');
	$scope.feed = [];
	
	$scope.addFeedItem = function(itemName) {
		var item = {
			name: itemName
		}
		$scope.feed.unshift(item);
		$scope.feedItemName = '';
	}
}

var Controller2 = function($scope) {
	console.log('Controller 2 loaded');
}