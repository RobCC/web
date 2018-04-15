define ['jquery', 'underscore', 'backbone', 'materialize'
'text!../html/header.html'
], ($, _, Backbone, Materialize, Template) ->
  Backbone.View.extend
    tagName     : 'header'
    className   : 'center-align'
    initialize  : ->
      @render()

    render:  ->
      @$el.html Template
      @

    animate: ->
      @$el.animateCss 'fadeIn'
