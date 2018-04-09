define(['jquery', 'underscore', 'backbone', 'text!../html/app.html'], function($, _, Backbone, Template) {
  return Backbone.View.extend({
    id: 'main-container',
    initialize: function() {
      console.log("Hello from Backbone!");
      return this.render();
    },
    render: function() {
      var $body;
      $body = $('body');
      return $body.append(Template);
    }
  });
});
