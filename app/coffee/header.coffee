define ['jquery', 'underscore', 'backbone', 'materialize'
'text!../html/header.html'
], ($, _, Backbone, Materialize, Template) ->
  Backbone.View.extend
    tagName     : 'header'
    classStyles : ['circle-bg']
    initialize  : ->
      @render()

    render:  ->
      @$el.html Template
      @applyRandomStyle()
      @

    applyRandomStyle: ->
      randomLength = Math.random() * @classStyles.length
      randomLength = Math.floor randomLength

      @$el.attr 'class', @classStyles[randomLength]

    animate: ->
      @$el.animateCss 'fadeIn'
      @$el.find(".image-wrapper").animateCss 'fadeInUp'
