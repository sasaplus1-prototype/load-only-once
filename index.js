(function(){

  'use strict';

  var initialize;

  function once(fn) {
    var called = false;

    return function() {
      if (!called) {
        fn.apply(void 0, arguments);
      }

      called = true;
    };
  }

  function readystatechange(event) {
    if (/loaded|interactive|complete/.test(document.readyState)) {
      initialize(event);
    }
  }

  function readystatechangeHandler(event) {
    readystatechange(event);
  }

  initialize = once(function(event) {
    console.log('initialze');

    console.log('event: ', event);
    console.log('event.type: ', (event || {}).type);
  });

  document.addEventListener('DOMContentLoaded', initialize, false);
  document.addEventListener('readystatechange', readystatechangeHandler, false);

  window.addEventListener('load', initialize, false);

  readystatechange();

}());
