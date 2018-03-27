requirejs.config
  paths:
    'jquery' : 'js/lib/jquery.min'


require ['jquery'], ($) ->
  console.log "Hello from requireJS"
