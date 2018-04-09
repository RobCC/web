define ['jquery', 'underscore', 'backbone', 'text!../html/app.html'], ($, _, Backbone, Template) ->
  Backbone.View.extend
    id : 'main-container'
    initialize: ->
      @render()

    render:  ->
      $body = $ 'body'

      @$el.html Template

      $body.append @$el
