app.directive('post', function() {
  return {
    restrict: 'E',
    template: function(el, attr) {
      console.log(el, attr);
      return `
        <h2><a href="${attr.url}">${attr.title}</a></h2>
        <p>${attr.description}</p>
      `
    }
  };
});