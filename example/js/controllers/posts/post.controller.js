app.controller('postCtrl',
  ['$scope', '$rootScope', function($scope, $rootScope) {

  console.log('postCtrl', $scope);
  $scope.title = 'Child';
  $scope.url = 'http://child.com';
  $scope.description = 'Hello World! Hello World! Hello World! Hello World!';
  $scope.viewPost = viewPost;
  $scope.sendForm = function(event) {
    event.preventDefault();

    alert('submitted');
  }

  function viewPost(event) {
    console.log('viewPost', event);
    event.preventDefault();

    // $scope.$apply();
    return
  }
}]);