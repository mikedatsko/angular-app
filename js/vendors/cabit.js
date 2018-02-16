
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.cabit = factory();
    }
}(this, function () {
  var isNode = typeof window === 'undefined';
  var global = isNode ? global : window;

  function cabit() {
    this.subscribers = {};
  }

  cabit.prototype.start = function(eventName, data) {
    var event = new CustomEvent('start::' + eventName, {
      detail: data
    });
    global.dispatchEvent(event);
  };

  cabit.prototype.end = function(eventName, data) {
    var event = new CustomEvent('end::' + eventName, {
      detail: data
    });
    global.dispatchEvent(event);
  };

  cabit.prototype.onStart = function(eventName, callback) {
    this.subscribers[eventName] = global.addEventListener('start::' + eventName, function(event) {
      callback(event.detail);
    });
  };

  cabit.prototype.onEnd = function(eventName, callback) {
    this.subscribers[eventName] = global.addEventListener('end::' + eventName, function(event) {
      callback(event.detail);
    });
  };

  cabit.prototype.onAll = function(eventName, callback) {
    this.subscribers[eventName] = global.addEventListener('start::' + eventName, function(event) {
      callback(event.detail);
    });

    this.subscribers[eventName] = global.addEventListener('end::' + eventName, function(event) {
      callback(event.detail);
    });
  };

  return new cabit();
}));
