'use strict';

var angular = require('angular');

angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService){
	
	$scope.addTodo = function(){
		var todo = {name: "This is a new todo."};
		$scope.todos.unshift(todo);
	};

	dataService.getTodos(function(response){
			console.log(response.data.todos);
			$scope.todos = response.data.todos;
		});

	$scope.deleteTodo = function(todo, $index){
		dataService.deleteTodo(todo);
		$scope.todos.splice($index, 1);
	};

	$scope.saveTodo = function(todo){
		dataService.saveTodo(todo);
	};

})
