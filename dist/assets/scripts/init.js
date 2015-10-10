(function() {
  window.check_n_bounce = function() {
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

}).call(this);
