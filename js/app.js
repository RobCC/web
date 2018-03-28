require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  return new Backbone.View.extend({
    initialize: function() {
      return console.log("Hello from Backbone!");
    }
  });
});
