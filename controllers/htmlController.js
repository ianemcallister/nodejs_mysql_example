var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function(app) {

	//using templating
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/person/:id', function(req, res) {
		res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
	});

	//handle HTTP requests, for GET calls
	app.get('/', function(req, res) {
		//send back html, including middleware
		res.send('<html><head><link rel="stylesheet" href="assets/styles.css" /></head><body><h1>Hello World!</h1></body></html>');

	});

	//passing variable through the route.
	app.get('/person/:id', function(req, res) {
		//send back html
		res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
	});

	//posting to person for body parsing
	app.post('/person', urlencodedParser, function(req, res) {
		res.send('Thank you ' + req.body.firstname + '!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});
}