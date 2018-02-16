app.directive('app', function() {
  return {
    restrict: 'E',
    template: `
      <div class="container">
        <add-todo></add-todo>
        <todos></todos>
      </div>
    `,
    compile: function() {
      return {
        pre: function() {
          window.parent.postMessage('FRAME_LOADED', (new URL(document.location.href)).searchParams.get('host_url') || 'http://jsmeasure.surge.sh');
        }
      }
    }
  }
})