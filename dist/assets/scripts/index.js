(function() {
  $(document).ready(function($) {
    var headerHeight, paraPositions;
    paraPositions = [];
    headerHeight = 123;
    $('.content.para').each(function() {
      return paraPositions.push($(this).offset().top);
    });
    $('a').click(function() {
      window.scrolling = true;
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - headerHeight + 20
      }, 500, "swing", function() {
        return window.scrolling = false;
      });
      return false;
    });
    $('ul li a').click(function() {
      $('ul li a').removeClass('current');
      return $(this).addClass('current');
    });
    $(document).on('scroll', function() {
      var currentParaIndex, currentScrollTop;
      if (window.scrolling) {
        return;
      }
      currentScrollTop = $(document).scrollTop();
      currentParaIndex = Math.max(0, paraPositions.filter(function(p) {
        return p < currentScrollTop + headerHeight;
      }).length - 1);
      $('ul li a').removeClass('current');
      return $('ul li a:eq(' + currentParaIndex + ')').addClass('current');
    });
    $('.navigation-toggle').click(function() {
      return $('.navigation').slideToggle();
    });
    return document.querySelector("body").onscroll = function() {
      var bounce, prog_pos, scroll;
      bounce = function() {
        return new WOW().init();
      };
      scroll = $(window).scrollTop();
      prog_pos = $('#programs').offset().top;
      if (scroll - prog_pos < -600 || scroll - prog_pos > 600) {
        return bounce();
      }
    };
  });

}).call(this);
