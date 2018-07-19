define ['jquery', 'underscore', 'backbone', 'materialize'
'text!../html/navigation.html'
], ($, _, Backbone, Materialize, Template) ->
  Backbone.View.extend
    tagName    : 'nav'
    className  : 'stick'
    events     :
      'click .option' : 'goToSection'
    initialize : ->

    render:  ->
      @$el.html Template
      @

    animate: ->
      self = @

      # bodyScroll = $('body').scrollTop()

      # if bodyScroll > 0
      #   @$el.addClass 'stick'

      @$el.animateCss 'fadeInDown', -> self.stickNavigation()

    stickNavigation: ->
      self = @
      @scrollDistance = $('body').scrollTop()

      $(document).on 'mousewheel', (e) ->
        # self.wheeled = true

      $(document).on 'scroll', (e) ->
        # self.wheeled = false
        console.log 'scrolled'

        newDistance = $('body').scrollTop()
        isScrollDown = newDistance > self.scrollDistance
        self.scrollDistance = newDistance

        if isScrollDown or self.optionClicked
          self.hideHeader()
        else
          self.showHeader()



    showHeader: ->
      self = @
      if @$el.hasClass 'nav-hidden'
        self.$el.removeClass 'nav-hidden'
        @$el.animateCss 'fadeInDown', -> self.optionClicked = false

    hideHeader: ->
      self = @
      if not @$el.hasClass 'nav-hidden'
        @$el.animateCss 'fadeOutUp', ->
          self.$el.addClass 'nav-hidden'
          self.optionClicked = false

    goToSection: (e) ->
      @optionClicked = true
      $target = $ e.currentTarget
      $dest   = $ $target.data 'target'

      # @$('.col.active').removeClass 'active'
      # $target.parent().addClass 'active'

      $('html, body').animate { scrollTop: $dest.offset().top }, 'slow'
