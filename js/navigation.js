define(['jquery', 'underscore', 'backbone', 'materialize', 'text!../html/navigation.html'], function($, _, Backbone, Materialize, Template) {
  return Backbone.View.extend({
    tagName: 'nav',
    events: {
      'click .option': 'goToSection'
    },
    initialize: function() {
      return this.render();
    },
    render: function() {
      this.$el.html(Template);
      return this;
    },
    animate: function() {
      return this.$el.animateCss('fadeInUp');
    },
    goToSection: function(e) {
      var $target;
      $target = $(e.currentTarget);
      this.$('.col.active').removeClass('active');
      return $target.parent().addClass('active');
    }
  });
});
