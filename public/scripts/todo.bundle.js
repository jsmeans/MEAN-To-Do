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

/***/ }
]);