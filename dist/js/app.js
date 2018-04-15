define(['jquery', 'underscore', 'backbone', 'materialize', 'js/header', 'js/navigation', 'js/content'], function($, _, Backbone, Materialize, Header, Nav, Content) {
  return Backbone.View.extend({
    el: 'body',
    initialize: function() {
      return this.render();
    },
    render: function() {
      var content, header, nav;
      header = new Header();
      nav = new Nav();
      content = new Content();
      this.$el.append(header.render().el);
      this.$el.append(nav.render().el);
      this.$el.append(content.render().el);
      header.animate();
      return nav.animate();
    }
  });
});
