define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return new Backbone.View.extend({
    id: 'main-container',
    initialize: function() {
      return console.log("Hello from Backbone!");
    }
  });
});
