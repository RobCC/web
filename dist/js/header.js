define(['jquery', 'underscore', 'backbone', 'materialize', 'text!../html/header.html'], function($, _, Backbone, Materialize, Template) {
  return Backbone.View.extend({
    tagName: 'header',
    classStyles: ['circle-bg'],
    initialize: function() {
      return this.render();
    },
    render: function() {
      this.$el.html(Template);
      this.applyRandomStyle();
      return this;
    },
    applyRandomStyle: function() {
      var randomLength;
      randomLength = Math.random() * this.classStyles.length;
      randomLength = Math.floor(randomLength);
      return this.$el.attr('class', this.classStyles[randomLength]);
    },
    animate: function() {
      this.$el.animateCss('fadeIn');
      return this.$el.find(".image-wrapper").animateCss('fadeInUp');
    }
  });
});
