define ['jquery', 'underscore', 'backbone', 'materialize'
'text!../html/navigation.html'
], ($, _, Backbone, Materialize, Template) ->
  Backbone.View.extend
    tagName    : 'nav'
    events     :
      'click .option' : 'goToSection'
    initialize : ->

    render:  ->
      @$el.html Template
      @

    stickNavigation: ->
      self = @
      @distance = @$el.offset().top
      $(document).on 'scroll', ->
        if $(window).scrollTop() >= self.distance
          self.$el.addClass 'stick'
        else
          self.$el.removeClass 'stick'
      @

    animate: ->
      self = @
      @$el.animateCss 'fadeInUpBig', -> self.stickNavigation()

    goToSection: (e) ->
      $target = $ e.currentTarget
      $dest   = $ $target.data 'target'

      @$('.col.active').removeClass 'active'
      $target.parent().addClass 'active'

      $('html,body').animate { scrollTop: $dest.offset().top }, 'slow'
