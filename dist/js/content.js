define(['jquery', 'underscore', 'backbone', 'materialize', 'text!../html/content.html'], function($, _, Backbone, Materialize, Template) {
  return Backbone.View.extend({
    className: 'content-wrapper',
    initialize: function() {},
    render: function() {
      this.$el.html(Template);
      this.$('.parallax').parallax();
      return this;
    }
  });
});
