define(['jquery', 'underscore', 'backbone', 'materialize', 'text!../html/navigation.html'], function($, _, Backbone, Materialize, Template) {
  return Backbone.View.extend({
    tagName: 'nav',
    className: 'stick',
    events: {
      'click .option': 'goToSection'
    },
    initialize: function() {},
    render: function() {
      this.$el.html(Template);
      return this;
    },
    animate: function() {
      var self;
      self = this;
      // bodyScroll = $('body').scrollTop()

      // if bodyScroll > 0
      //   @$el.addClass 'stick'
      return this.$el.animateCss('fadeInDown', function() {
        return self.stickNavigation();
      });
    },
    stickNavigation: function() {
      var self;
      self = this;
      this.scrollDistance = $('body').scrollTop();
      $(document).on('mousewheel', function(e) {});
      // self.wheeled = true
      return $(document).on('scroll', function(e) {
        var isScrollDown, newDistance;
        // self.wheeled = false
        console.log('scrolled');
        newDistance = $('body').scrollTop();
        isScrollDown = newDistance > self.scrollDistance;
        self.scrollDistance = newDistance;
        if (isScrollDown || self.optionClicked) {
          return self.hideHeader();
        } else {
          return self.showHeader();
        }
      });
    },
    showHeader: function() {
      var self;
      self = this;
      if (this.$el.hasClass('nav-hidden')) {
        self.$el.removeClass('nav-hidden');
        return this.$el.animateCss('fadeInDown', function() {
          return self.optionClicked = false;
        });
      }
    },
    hideHeader: function() {
      var self;
      self = this;
      if (!this.$el.hasClass('nav-hidden')) {
        return this.$el.animateCss('fadeOutUp', function() {
          self.$el.addClass('nav-hidden');
          return self.optionClicked = false;
        });
      }
    },
    goToSection: function(e) {
      var $dest, $target;
      this.optionClicked = true;
      $target = $(e.currentTarget);
      $dest = $($target.data('target'));
      // @$('.col.active').removeClass 'active'
      // $target.parent().addClass 'active'
      return $('html, body').animate({
        scrollTop: $dest.offset().top
      }, 'slow');
    }
  });
});
