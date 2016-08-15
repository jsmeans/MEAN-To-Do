'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err) {
	if(err) {
		console.log('Unable to connect to database.');
	} else {
		console.log('Successfully connected to MongoDB!');
	}
});