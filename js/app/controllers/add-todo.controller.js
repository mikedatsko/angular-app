app.controller('addTodoCtrl', ['$scope', 'dataService', 'uuid', addTodoCtrl]);

function addTodoCtrl($scope, dataService, uuid) {
  $scope.todoId = '';
  $scope.todoText = '';

  cabit.onStart('edit-todo', function(todo) {
    $scope.todoId = todo.id;
    $scope.todoText = todo.text;
  });

  $scope.add = function() {
    var todoText = $scope.todoText;

    if (!todoText) { return }

    let todos = dataService.read('todos') || [];

    if ($scope.todoId) {
      todos = todos.map(function(_todo) {
        if (_todo.id === $scope.todoId) {
          _todo.text = todoText;
        }
        return _todo;
      });

      dataService.update('todos', todos);

      var todo = {
        id: $scope.todoId,
        text: todoText
      };

      cabit.end('edit-todo', todo);
    } else {
      var todo = {
        text: todoText,
        checked: false,
        id: uuid.v1()
      };

      todos.push(todo);
      dataService.create('todos', todos);

      cabit.start('add-todo', todo);
    }

    $scope.todoId = '';
    $scope.todoText = '';
  }
}