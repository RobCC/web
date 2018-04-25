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
      return this.$el.animateCss('fadeInUpBig');
    },
    goToSection: function(e) {
      var $dest, $target;
      $target = $(e.currentTarget);
      $dest = $($target.data('target'));
      this.$('.col.active').removeClass('active');
      $target.parent().addClass('active');
      return $('html,body').animate({
        scrollTop: $dest.offset().top
      }, 'slow');
    }
  });
});
