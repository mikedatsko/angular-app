app.directive('todos', function() {
  return {
    restrict: 'E',
    template: `
      <table class="table table-striped table-hover" ng-controller="todosCtrl">
        <tbody>
          <tr ng-repeat="todo in todos">
            <td width="30" ng-click="changeChecked(todo)">
              <span
                class="glyphicon glyphicon-unchecked"
                ng-hide="todo.checked"
                >
              </span>
              <span
                class="glyphicon glyphicon-check"
                ng-hide="!todo.checked"
                >
              </span>
            </td>
            <td>{{todo.text}}</td>
            <td width="70">
              <button
                class="btn btn-info btn-xs"
                type="button"
                ng-disabled="todo.isEdit"
                ng-click="edit(todo)"
                >
                <span class="glyphicon glyphicon-pencil"></span>
              </button>
              
              <button
                class="btn btn-danger btn-xs"
                type="button"
                ng-disabled="todo.isEdit"
                ng-click="remove(todo)"
                >
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </td>
          </tr>
      </table>
    `
  }
});