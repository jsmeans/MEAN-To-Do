'use strict';
var angular = require('angular');

angular.module('todoListApp')

.service('dataService', function($http){

	this.getTodos = function(callback){
		$http.get('/api/todos')
		.then(callback)
	};

	this.deleteTodo = function(todo){
		console.log("The " + todo.name + " todo has been deleted!");
	};

	this.saveTodo = function(todo){
		console.log("The " + todo.name + " todo has been saved!");
	};



});