'use strict';

var express = require('express');
var router = require('./api');

var app = express();

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(8080, function() {
	console.log("The server is running on port 8080!");
});
