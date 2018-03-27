requirejs.config
  paths:
    'jquery' : 'js/lib/jquery.min.js'


require ['jquery'], ($) ->
  console.log "Hello from requireJS"
