var app = angular.module('Todo', []);

app.controller('TodoCtrl', [
	'$scope',
	function($scope){

		$scope.Todos = [];

		$scope.editting = false;

		$scope.TodoInput = "";

		$scope.newTodo = function(){
			$scope.Todos.push($scope.TodoInput);
			$scope.TodoInput = '';
		}

		$scope.removeTodo = function(index){
			$scope.Todos.splice(index, 1);
		}

		$scope.editTodo = function(index){
			$scope.editting = true;
			$scope.TodoInput = $scope.Todos[index];
			$scope.index = index;
		}

		$scope.updateTodo = function(){
			$scope.editting = false;
			$scope.TodoInput = '';
		}
	
	}
])