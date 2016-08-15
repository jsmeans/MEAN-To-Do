'use strict';

var angular = require('angular');

angular.module('todoListApp')

.controller('mainCtrl', function($scope, $log, $interval, dataService){
	
	


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
		return todo;
	};

	$scope.saveTodos = function(){
		var filteredTodos = $scope.todos.filter(function(todo){
			if(todo.edited){
				return todo
			};
		})
		dataService.saveTodos(filteredTodos).finally($scope.resetTodoState());
	};
	$scope.resetTodoState = function(){
		$scope.todos.forEach(function(todo){
			todo.edited = false;
		});
	};

})
