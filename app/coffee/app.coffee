require ['jquery', 'underscore', 'backbone'], ($, _, Backbone) ->
  new Backbone.View.extend
    initialize: ->

      console.log "Hello from Backbone!"
