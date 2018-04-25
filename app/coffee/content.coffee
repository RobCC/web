define ['jquery', 'underscore', 'backbone', 'materialize'
'text!../html/content.html'
], ($, _, Backbone, Materialize, Template) ->
  Backbone.View.extend
    className  : 'content-wrapper'
    initialize : ->
      @render()

    render:  ->
      @$el.html Template
      @