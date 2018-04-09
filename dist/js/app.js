define(['jquery', 'underscore', 'backbone', 'text!../html/app.html'], function($, _, Backbone, Template) {
  return Backbone.View.extend({
    id: 'main-container',
    initialize: function() {
      return console.log("Hello from Backbone!");
    }
  });
});
