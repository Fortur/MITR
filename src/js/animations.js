$(window).on('scroll', function() {
  var $two = $('#two'),
    $three=$('#three'),
    $four=$('#four'),
    $five=$('#five'),
    $six=$('#six'),
    $seven=$('#seven'),
    $eight=$('#eight'),
    scroll = $(this).scrollTop();

  if (scroll > $(".second-block").offset().top-130) {
    $two.addClass('showing');
    $two.removeClass('hid');
  }

  if (scroll > $(".third-block").offset().top-130) {
    $three.addClass('showing');
    $three.removeClass('hid');
  }

  if (scroll > $(".forth-block").offset().top-130) {
    $four.addClass('showing');
    $four.removeClass('hid');
  }
  
  if (scroll > $(".five-block").offset().top-130) {
    $five.addClass('showing');
    $five.removeClass('hid');
  }
  
  if (scroll > $(".six-block").offset().top-130) {
    $six.addClass('showing');
    $six.removeClass('hid');
  }
  
  if (scroll > $(".seven-block").offset().top-130) {
    $seven.addClass('showing');
    $seven.removeClass('hid');
  }

  if (scroll > $(".eight-block").offset().top-180) {
    $eight.addClass('showing');
    $eight.removeClass('hid');
  }

});
