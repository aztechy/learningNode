'use strict'

var Controller1 = function($scope, socket) {
	$scope.streamToggle = 0;
	
	socket.on('tweet', function(data) {
		if ($scope.streamToggle == 1) {
			$scope.pausedFeed.unshift(data);
		} else {
			$scope.feed.unshift(data);
		}
	});
	
	$scope.feed = [];
	$scope.pausedFeed = [];
	
	$scope.addFeedItem = function(itemName) {
		var item = {
			text: itemName
		}
		console.log($scope.streamToggle);
		if ($scope.streamToggle == 1) {
			console.log('save to the paused bucked');
			$scope.pausedFeed.unshift(item);
		} else {
			console.log('save to the regular bucked');
			$scope.feed.unshift(item);
		}

		$scope.feedItemName = '';
	}
	
	$scope.toggleFeed = function() {
		// When turning the feed off, copy over the buffered data.
		if ($scope.streamToggle == 0) {
			$scope.feed = $scope.pausedFeed.concat($scope.feed);
			$scope.pausedFeed = [];
			console.log('Return the container');
		}
	}
	
	$scope.updateFeed = function() {
		console.log('Update pressed');
		$scope.feed = $scope.pausedFeed.concat($scope.feed);
		$scope.pausedFeed = [];
	}
}

var Controller2 = function($scope) {
	console.log('Controller 2 loaded');
}