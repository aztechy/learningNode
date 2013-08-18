// Load up our express framework and define routing and file location logic
var express = require('express'),
	  app = express(),
		server = require('http').createServer(app);
		io = require('socket.io').listen(server),
		twitterModule = require('./modules/twitterModule');

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
	res.render('index');	
});

app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

app.get('*', function(req, res) {
	res.render('index');
});

io.sockets.on('connection', function(socket) {
	var twit = twitterModule.twit;
	twit.stream('statuses/filter', {'locations':'-80.10,26.10,-80.05,26.15'},
		function(stream) {
			stream.on('data', function(data) {
				socket.emit('tweet', data);
			});
		});
});

var start = function(port) {
	server.listen(port);
	console.log('Server started and waiting for requests on localhost:' + port);	
}

exports.start = start;