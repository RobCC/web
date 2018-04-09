define ['jquery', 'underscore', 'backbone', 'text!../html/app.html'], ($, _, Backbone, Template) ->
  Backbone.View.extend
    id : 'main-container'
    initialize: ->
      console.log "Hello from Backbone!"
      @render()

    render:  ->
      $body = $ 'body'

      $body.append Template
