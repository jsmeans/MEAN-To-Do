webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module("todoListApp", []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);



/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

	angular.module('todoListApp')

	.directive('todos', function() {
		return{
			templateUrl: 'templates/todos.html',
			controller: 'mainCtrl'
		}
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);

	angular.module('todoListApp')

	.service('dataService', function($http, $q){

		this.getTodos = function(callback){
			$http.get('/api/todos')
			.then(callback)
		};

		this.deleteTodo = function(todo) {
	    if (!todo._id) {
	      return $q.resolve();
	    }
	    return $http.delete('/api/todos/' + todo._id).then(function() {
	      console.log("I deleted the " + todo.name + " todo!");
	    });
	  };

		this.saveTodos = function(todos){
			var queue = [];
			todos.forEach(function(todo) {
				var request;
				if(!todo._id) {
					request = $http.post('/api/todos', todo)
				} else {
					request = $http.put('/api/todos/' + todo._id, todo).then(function(result){
						todo = result.data.todo;
						return todo;
					})
				};
				queue.push(request);
			});
			return $q.all(queue).then(function(results) {
				console.log("I saved " + todos.length + " todos!");
			});
		};




	});

/***/ }
]);