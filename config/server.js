// Load up our express framework and define routing and file location logic

var express = require('express'),
	  app = express();

app.configure(function() {
	app.set('title', 'Learning Node Application');
	
	if ('development' == app.get('env')) {
		app.set('db uri', 'localhost/dev');
	}
	
	// Define where we'll get content
	app.use(express.static(__dirname + '/public'));
});

app.get('/hello', function(req, res) {
	console.log(app.routes);
	res.send('Hello world');
});

var start = function(port) {
	app.listen(port);
	console.log('Server started and waiting for requests on localhost:' + port);	
}

exports.start = start;