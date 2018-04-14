define ['jquery', 'underscore', 'backbone', 'materialize'
'text!../html/navigation.html'
], ($, _, Backbone, Materialize, Template) ->
  Backbone.View.extend
    tagName    : 'nav'
    initialize : ->
      @render()

    render:  ->
      @$el.html Template
      @
