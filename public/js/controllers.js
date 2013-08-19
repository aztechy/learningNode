'use strict'

var Controller1 = function($scope, socket) {
	$scope.streamToggle = 0;

	socket.on('tweet', function(data) {
		fillInTheBucket(data);
	});
	
	$scope.feed = [];
	$scope.pausedFeed = [];
	
	$scope.addFeedItem = function(itemName) {
		var item = {
			text: itemName
		}
		
		fillInTheBucket(item);
		
		$scope.feedItemName = '';
	}
	
	$scope.toggleFeed = function() {
		// When turning the feed off, copy over the buffered data.
		if ($scope.streamToggle == 0) {
			$scope.feed = $scope.pausedFeed.concat($scope.feed);
			$scope.pausedFeed = [];
		}
	}
	
	$scope.updateFeed = function() {
		$scope.feed = $scope.pausedFeed.concat($scope.feed);
		$scope.pausedFeed = [];
	}
	
	// Utility function to fill data into the correct 
	// array based on if user has paused their feed or not.
	var fillInTheBucket = function(data) {
		if ($scope.streamToggle == 1) {
			$scope.pausedFeed.unshift(data);
		} else {
			$scope.feed.unshift(data);
		}		
	}
}

var Controller2 = function($scope) {
	console.log('Controller 2 loaded');
}