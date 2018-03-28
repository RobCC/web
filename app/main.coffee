requirejs.config
  paths:
    'jquery'      : 'js/lib/jquery.min'
    'underscore'  : 'js/lib/underscore-min'
    'backbone'    : 'js/lib/backbone-min'
    'materialize' : 'js/lib/materialize.min'
    'hammer'      : 'js/lib/hammer.min'
  shim:
    'underscore':
      exports : '_'
    'hammer' :
      exports : 'Hammer'
    'materialize' :
      exports : 'Materialize'
      deps    : ['hammer', 'jquery']
    # 'backbone':
    #   deps    : ['jquery', 'underscore']
    #   exports : 'Backbone'


# Shimming is only used for non-AMD modules,
# and loading a non-AMD module via RequireJS doesn't work precisely because RequireJS requires AMD modules.

# Shimming is saying 'load this non-AMD library and expose the global namespace
# specified in the exports variable as if it was an AMD module'


require ['jquery', 'underscore', 'backbone', 'js/app.js'], ($, _, Backbone, App) ->
  console.log "Hello from requireJS"
  app = new App();
