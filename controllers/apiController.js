var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

	//add json data
	app.get('/api', function(req, res) {
		//send back json
		res.json( { firstname: 'John', lastname: 'Doe' } );
	});

	//posting json
	/*app.post('/personjson', jsonParser, function(req, res) {
		res.send('Thank you for the JSON data!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});*/

	app.get('/api/person/:id', function(req, res) {
		//get that data from databse
		res.json({ firstname: 'John', lastname: 'Doe' });
	});

	app.post('/api/person', function(req, res) {
		//save to the databse
	});

	app.delete('/api/person/:id', function(req, res) {
		//delete from the databse
	});
}