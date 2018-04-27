define(['jquery', 'underscore', 'backbone', 'materialize', 'anime', 'text!../html/header.html'], function($, _, Backbone, Materialize, anime, Template) {
  return Backbone.View.extend({
    tagName: 'header',
    classStyles: ['circle-bg'],
    welcomeOptions: [
      'Hi!',
      'Welcome!',
      'Greetings!',
      'Nice to see you!',
      'How do you do?',
      'Life is suffering!',
      'Why so serious?',
      //'Yippee Ki Yay, Mr. Falcon'
      'May the force be with you!',
      'Ayyyyy'
    ],
    initialize: function() {},
    render: function() {
      this.$el.html(Template);
      this.$('.letters').html(this.getRandomWelcomePhrase());
      this.applyRandomStyle();
      return this;
    },
    animate: function() {
      this.$el.animateCss('fadeIn');
      this.$el.find(".image-wrapper").animateCss('fadeInUp');
      return this.animateTitle();
    },
    animateTitle: function() {
      var fadeInStart, fadeOutVerticalLine, showLetters, translateLetters;
      this.$('.ml11 .letters').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w|[-!$%^&*()_+|~=`@#{}\[\]:";'<>?,.\/])/g, '<span class=\'letter\'>$&</span>'));
      });
      fadeInStart = {
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700
      };
      translateLetters = {
        targets: '.ml11 .line',
        translateX: [0, $('.ml11 .letters').width() + 5],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100
      };
      showLetters = {
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=775',
        delay: function(el, i) {
          return 34 * (i + 1);
        }
      };
      fadeOutVerticalLine = {
        targets: '.line',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 500
      };
      return anime.timeline({
        loop: false
      }).add(fadeInStart).add(translateLetters).add(showLetters).add(fadeOutVerticalLine);
    },
    getRandomWelcomePhrase: function() {
      var randomLength;
      randomLength = Math.random() * this.welcomeOptions.length;
      randomLength = Math.floor(randomLength);
      return this.welcomeOptions[randomLength];
    },
    applyRandomStyle: function() {
      var randomLength;
      randomLength = Math.random() * this.classStyles.length;
      randomLength = Math.floor(randomLength);
      return this.$el.attr('class', this.classStyles[randomLength]);
    }
  });
});
