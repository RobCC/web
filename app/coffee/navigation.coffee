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
      @$el.animateCss 'fadeInUpBig'

    goToSection: (e) ->
      $target = $ e.currentTarget
      $dest = $ $target.data 'target'

      @$('.col.active').removeClass 'active'
      $target.parent().addClass 'active'

      $('html,body').animate { scrollTop: $dest.offset().top }, 'slow'
