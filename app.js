//load modules
var env = require('./env.js');
var express = require('express');
var app = express();
var mysql = require('mysql');

//controllers
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

//environment variables
var port = process.env.PORT || 3000;

//connecting middleware
app.use('/assets', express.static(__dirname + '/public'));

//setup templates with ejs
app.set('view engine', 'ejs');

//setting up middleware
app.use('/', function (req, res, next) {
	console.log('Request Url: ' + req.url);

	//access the mysql database
	var con = mysql.createConnection({
		//build the query
		host: "localhost",
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: "nodeAddressBook"
	});

	//building the query
	con.query('SELECT People.ID, Firstname, Lastname, Address FROM People',
		function(err, rows) {
			if(err) throw err;
				console.log(rows);
		}
	);

	next();
});

//call html controller
htmlController(app);

//call api controller
apiController(app);

//open the port for local development
app.listen(port);

