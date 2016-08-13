'use strict';

var angular = require('angular');

angular.module("todoListApp", []);

require('./scripts/controllers/main.js');
require('./scripts/directives/todos.js');
require('./scripts/services/data.js');

