app.controller('postsCtrl',
  ['$scope', 'getPostsService', function($scope, getPostsService) {

  console.log('postsCtrl');
  $scope.posts = getPostsService.getPosts();

  $scope.title = 'Parent';
  $scope.url = 'http://parent.com';
  $scope.description = 'Parent';

  // $scope.$watch = function() {
  //   console.log('watch');
  // };
  
}]);