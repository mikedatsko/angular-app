app.directive('posts', function() {
  return {
    restrict: 'E',
    template: `
      <ul>
        <li ng-repeat="(key, post) in posts">
          <div ng-controller="postCtrl">
            <post
              title="{{post.title}}"
              url="{{post.url}}"
              description="{{post.description}}"
              >
            </post>
          </div>
        </li>
      </ul>

      <form ng-submit="sendForm($event)">
        <input type="text" />
      </form>
    `
  }
});