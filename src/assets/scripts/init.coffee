window.check_n_bounce = ->
  bounce = ->
    new WOW().init()

  scroll = $(window).scrollTop()
  prog_pos = $('#programs').offset().top
  bounce() if scroll-prog_pos < -600 or scroll-prog_pos > 600
