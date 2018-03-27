requirejs.config({
  paths: {
    'jquery': 'js/lib/jquery.min.js'
  }
});

require(['jquery'], function($) {
  return console.log("Hello from requireJS");
});
