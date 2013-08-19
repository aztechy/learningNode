var twitter = require('ntwitter'),
		util = require('util'),
		appConfig = require('../appConfig');
		
// Twitter setup
module.exports.twit = new twitter({
	consumer_key: appConfig.twitterCredentials.consumer_key,
	consumer_secret: appConfig.twitterCredentials.consumer_secret,
	access_token_key: appConfig.twitterCredentials.access_token_key,
	access_token_secret: appConfig.twitterCredentials.access_token_secret
});