define(['jquery', 'underscore', 'backbone', 'materialize', 'text!../html/navigation.html'], function($, _, Backbone, Materialize, Template) {
  return Backbone.View.extend({
    tagName: 'nav',
    events: {
      'click .option': 'goToSection'
    },
    initialize: function() {},
    render: function() {
      this.$el.html(Template);
      return this;
    },
    stickNavigation: function() {
      var self;
      self = this;
      this.distance = this.$el.offset().top;
      $(document).on('scroll', function() {
        if ($(window).scrollTop() >= self.distance) {
          return self.$el.addClass('stick');
        } else {
          return self.$el.removeClass('stick');
        }
      });
      return this;
    },
    animate: function() {
      var self;
      self = this;
      return this.$el.animateCss('fadeInUpBig', function() {
        return self.stickNavigation();
      });
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
