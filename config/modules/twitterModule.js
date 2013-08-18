var twitter = require('ntwitter'),
		util = require('util');
		
// Twitter setup
module.exports.twit = new twitter({
	consumer_key: 'consumer_key',
	consumer_secret: 'consumer_secret',
	access_token_key: 'access_token_key',
	access_token_secret: 'access_token_secret'
});