app.controller('todosCtrl', ['$scope', 'dataService', todosCtrl]);

function todosCtrl($scope, dataService) {
  $scope.todos = dataService.read('todos') || [];

  cabit.onStart('add-todo', function(todo) {
    $scope.todos.push(todo);
  });

  cabit.onEnd('edit-todo', todo => {
    $scope.todos = $scope.todos.map(function(_todo) {
      if (_todo.id === todo.id) {
        _todo.text = todo.text;
      }

      _todo.isEdit = false;

      return _todo;
    });
  });

  $scope.changeChecked = function(todo) {
    todo.checked = !todo.checked;
    $scope.update();
  };

  $scope.edit = function(todo) {
    $scope.todos = $scope.todos.map(function(_todo) {
      _todo.isEdit = true;
      return _todo;
    });
    cabit.start('edit-todo', todo);
  };

  $scope.remove = function(todo) {
    $scope.todos.splice(todo, 1);
    $scope.update();
  };

  $scope.update = function() {
    dataService.update('todos', $scope.todos);
  };
}