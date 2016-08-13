'use strict';

var express = require('express');

var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req,res) {
	res.json({todos: todos});
})

// TODO: add POST route to create new entries

// TODO: add PUT route to update entries 

// TODO: add DELETE route to delete entries

module.exports = router;