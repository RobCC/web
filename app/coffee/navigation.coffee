define ['jquery', 'underscore', 'backbone', 'materialize'
'text!../html/navigation.html'
], ($, _, Backbone, Materialize, Template) ->
  Backbone.View.extend
    tagName    : 'nav'
    events     :
      'click .option' : 'goToSection'
    initialize : ->
      @render()

    render:  ->
      @$el.html Template
      @

    animate: ->
      @$el.animateCss 'fadeInUp'

    goToSection: (e) ->
      $target = $ e.currentTarget

      @$('.col.active').removeClass 'active'

      $target.parent().addClass 'active'
