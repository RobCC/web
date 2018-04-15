define ['jquery', 'underscore', 'backbone', 'materialize'
'js/header'
'js/navigation'
'js/content'
], ($, _, Backbone, Materialize, Header, Nav, Content) ->
  Backbone.View.extend
    el : 'body'
    initialize: ->
      @render()

    render: ->
      header  = new Header()
      nav     = new Nav()
      content = new Content()

      @$el.append header.render().el
      @$el.append nav.render().el
      @$el.append content.render().el

      header.$el.animateCss 'fadeIn'
      nav.$el.animateCss 'fadeInUp'
