define(['jquery', 'underscore', 'backbone', 'materialize', 'text!../html/app.html'], function($, _, Backbone, Materialize, Template) {
  return Backbone.View.extend({
    id: 'main-container',
    initialize: function() {
      return this.render();
    },
    render: function() {
      var $body;
      $body = $('body');
      this.$el.html(Template);
      return $body.append(this.$el);
    },
    // @initParallax()
    initParallax: function() {
      this.$('.main-px').parallax();
      return this.$('.parallax-container').show().animateCss('fadeIn');
    }
  });
});
