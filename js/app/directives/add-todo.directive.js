app.directive('addTodo', function() {
  return {
    restrict: 'E',
    template: function(el, attr) {
      return `
        <div class="row" ng-controller="addTodoCtrl">
          <div class="col-lg-12">
            <form
              action="javascript:void(0)"
              method="POST"
              ng-submit="add()"
              >
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  name="todo"
                  placeholder="Todo text..."
                  ng-model="todoText"
                >
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="submit">
                    <span ng-hide="!todoId">Save</span>
                    <span ng-hide="!!todoId">Add</span>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      `
    }
  };
});