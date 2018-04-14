define(['jquery', 'underscore', 'backbone', 'materialize', 'text!../html/navigation.html'], function($, _, Backbone, Materialize, Template) {
  return Backbone.View.extend({
    tagName: 'nav',
    initialize: function() {
      return this.render();
    },
    render: function() {
      this.$el.html(Template);
      return this;
    }
  });
});
