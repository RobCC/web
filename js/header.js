define(['jquery', 'underscore', 'backbone', 'materialize', 'text!../html/header.html'], function($, _, Backbone, Materialize, Template) {
  return Backbone.View.extend({
    tagName: 'header',
    className: 'center-align',
    initialize: function() {
      return this.render();
    },
    render: function() {
      this.$el.html(Template);
      return this;
    }
  });
});
