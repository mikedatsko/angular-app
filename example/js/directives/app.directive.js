app.directive('app', function() {
  return {
    restrict: 'E',
    template: `
      <div class="container">
        <div
          ng-controller="menuCtrl"
          >
          {{ menuItems }}
        </div>
        <div ng-controller="postsCtrl">
          <posts posts="posts"></posts>
        </div>
      </div>
    `
  }
})