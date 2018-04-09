define(['jquery', 'underscore', 'backbone', 'text!../html/app.html'], function($, _, Backbone, Template) {
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
    }
  });
});
