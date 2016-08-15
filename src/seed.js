'use strict';


var Todo = require('./models/todo.js');

var todos = [

'clean the house',
'feed the cat',
'play games',
'do chores'
];

todos.forEach(function(todo, index){
	Todo.find({'name':todo}, function(err, todos){
		if(!err && !todos.length){
			Todo.create({completed:false, name: todo});
		};
	});
});