// Load up our express framework and define routing and file location logic
var express = require('express'),
	  app = express();

app.configure(function() {
	app.set('title', 'Learning Node Application');
	
	// Define where we'll get static content
	app.use(express.static('public'));
	
	// Setup our default templating engine.
	app.set('view engine', 'jade');
	app.use('views', __dirname + '/views');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// Just send all requests here to the single app page.
app.get('/', function(req, res) {
	res.render('index.jade');	
});

app.use(function(req, res, next) {
	console.log(req.path);
	res.status(404);
	res.render('404NotFound.jade');
	// res.send(404, "Unable to find resource");
});

var start = function(port) {
	app.listen(port);
	console.log('Server started and waiting for requests on localhost:' + port);	
}

exports.start = start;