define ['jquery', 'underscore', 'backbone', 'materialize', 'anime'
'text!../html/header.html'
], ($, _, Backbone, Materialize, anime, Template) ->
  Backbone.View.extend
    tagName        : 'header'
    classStyles    : ['simple']
    welcomeOptions : [
      'Hi!', 'Welcome!', 'Greetings!', 'Nice to see you!'
      'May the force be with you!'
      #'Yippee Ki Yay, Mr. Falcon'
    ]
    initialize  : ->

    render:  ->
      @$el.html Template
      @$('.letters').html @getRandomWelcomePhrase()
      @applyRandomStyle()
      @

    animate: ->
      @$el.animateCss 'fadeIn'
      @$el.find(".image-wrapper").animateCss 'fadeInUp'

      @animateTitle()

    animateTitle: ->
      @$('.ml11 .letters').each ->
        $(@).html $(@).text().replace /([^\x00-\x80]|\w|[-!$%^&*()_+|~=`@#{}\[\]:";'<>?,.\/])/g, '<span class=\'letter\'>$&</span>'
        return

      fadeInStart =
        targets     : '.ml11 .line'
        scaleY      : [0, 1]
        opacity     : [0.5 ,1]
        easing      : 'easeOutExpo'
        duration    : 700

      translateLine =
        targets     : '.ml11 .line'
        translateX  : [0, $('.ml11 .letters').outerWidth() + 5 + ($('.ml11 .letters').outerWidth() * .05)]
        easing      : 'easeOutExpo'
        duration    : 700
        delay       : 100

      translateLetters =
        targets     : '.ml11 .letter'
        opacity     : [0, 1]
        easing      : 'easeOutExpo'
        duration    : 600
        offset      : '-=775'
        delay       : (el, i) -> 50 * (i + 1)

      fadeOutVerticalLine =
        targets     : '.line'
        opacity     : 0
        duration    : 1000
        easing      : 'easeOutExpo'
        delay       : 500

      anime.timeline(loop: false).add(fadeInStart).add(translateLine).add(translateLetters).add fadeOutVerticalLine

    getRandomWelcomePhrase: ->
      randomLength = Math.random() * @welcomeOptions.length
      randomLength = Math.floor randomLength

      @welcomeOptions[randomLength]

    applyRandomStyle: ->
      randomLength = Math.random() * @classStyles.length
      randomLength = Math.floor randomLength

      @$el.attr 'class', @classStyles[randomLength]
