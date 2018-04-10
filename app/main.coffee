requirejs.config
  paths:
    'jquery'      : 'js/lib/jquery.min'
    'underscore'  : 'js/lib/underscore-min'
    'backbone'    : 'js/lib/backbone-min'
    'materialize' : 'js/lib/materialize.min'
    'velocity'    : 'js/lib/velocity.min'
    'hammer'      : 'js/lib/hammer.min'
    'text'        : 'text'
  shim:
    'underscore':
      exports : '_'
    'hammer' :
      exports : 'Hammer'
    'materialize' :
      exports : 'Materialize'
      deps    : ['hammer', 'velocity', 'jquery']
    # 'backbone':
    #   deps    : ['jquery', 'underscore']
    #   exports : 'Backbone'


# Shimming is only used for non-AMD modules,
# and loading a non-AMD module via RequireJS doesn't work precisely because RequireJS requires AMD modules.

# Shimming is saying 'load this non-AMD library and expose the global namespace
# specified in the exports variable as if it was an AMD module'

#require does not return node_modules
#define does
requirejs ['jquery', 'underscore', 'backbone', './js/app'], ($, _, Backbone, App) ->
  $.fn.extend animateCss: (animationName, callback) ->
    animationEnd = ((el) ->
      animations =
        animation: 'animationend'
        OAnimation: 'oAnimationEnd'
        MozAnimation: 'mozAnimationEnd'
        WebkitAnimation: 'webkitAnimationEnd'
      for t of animations
        if el.style[t] != undefined
          return animations[t]
      return
    )(document.createElement('div'))
    @addClass('animated ' + animationName).one animationEnd, ->
      $(this).removeClass 'animated ' + animationName
      if typeof callback == 'function'
        callback()
      return
    this

  app = new App();
