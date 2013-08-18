'use strict'

var Controller1 = function($scope, socket) {
	console.log('Controller 1 loaded');
	socket.on('tweet', function(data) {
		$scope.feed.unshift(data);
	});
	
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