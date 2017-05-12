var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

// Create a route handler for the home path
app.get('/', function(req, res){
	res.render('index', {
		title: 'my page'
	});
});

app.listen(3000);
console.log('Server running at localhost:3000');