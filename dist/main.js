requirejs.config({
  paths: {
    'jquery': 'js/lib/jquery.min'
  }
});

require(['jquery'], function($) {
  return console.log("Hello from requireJS");
});
