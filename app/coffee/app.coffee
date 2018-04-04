define ['jquery', 'underscore', 'backbone'], ($, _, Backbone) ->
  new Backbone.View.extend
    id : 'main-container'
    initialize: ->

      console.log "Hello from Backbone!"
