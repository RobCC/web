define ['jquery', 'underscore', 'backbone', 'materialize', 'text!../html/app.html'], ($, _, Backbone, Materialize, Template) ->
  Backbone.View.extend
    id : 'main-container'
    initialize: ->
      @render()

    render:  ->
      $body = $ 'body'

      @$el.html Template
      $body.append @$el

      # @initParallax()

    initParallax: ->
      @$('.main-px').parallax()
      @$('.parallax-container').show().animateCss 'fadeIn'
