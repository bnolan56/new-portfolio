$(document).ready(function() {

  $(window).scroll(function() {

    if ($(window).scrollTop()>300) {
      $('nav').addClass('blue-grey lighten-1');
    } else {
      $('nav').removeClass('blue-grey lighten-1');
    }
  });
});
