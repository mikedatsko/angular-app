app.service('getPostsService', function () {
  console.log('getPostsService');

  var service = {
    getPosts: function() {
      return [
        {
          title: 'title1',
          url: 'url',
          description: 'desc'
        },
        {
          title: 'title2',
          url: 'url',
          description: 'desc'
        },
        {
          title: 'title3',
          url: 'url',
          description: 'desc'
        }
      ]
    }
  };
  return service
});