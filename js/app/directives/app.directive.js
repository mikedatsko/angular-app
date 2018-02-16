app.directive('app', function() {
  return {
    restrict: 'E',
    template: `
      <div class="container">
        <add-todo></add-todo>
        <todos></todos>
      </div>
    `
  }
})