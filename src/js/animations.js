$(window).on('scroll', function() {
  var $two = $('#two'),
    $three=$('#three'),
    $four=$('#four'),
    $five=$('#five'),
    $six=$('#six'),
    $seven=$('#seven'),
    $eight=$('#eight'),
    scroll = $(this).scrollTop();

  if (scroll > $(".second-block").offset().top-100) {
    $two.addClass('showing');
    $two.removeClass('hid');
  }

  if (scroll > $(".third-block").offset().top-100) {
    $three.addClass('showing');
    $three.removeClass('hid');
  }

  if (scroll > $(".forth-block").offset().top-10) {
    $four.addClass('showing');
    $four.removeClass('hid');
  }
  
  if (scroll > $(".five-block").offset().top-100) {
    $five.addClass('showing');
    $five.removeClass('hid');
  }
  
  if (scroll > $(".six-block").offset().top-100) {
    $six.addClass('showing');
    $six.removeClass('hid');
  }
  
  if (scroll > $(".seven-block").offset().top-100) {
    $seven.addClass('showing');
    $seven.removeClass('hid');
  }

  if (scroll > $(".eight-block").offset().top-100) {
    $eight.addClass('showing');
    $eight.removeClass('hid');
  }

});
