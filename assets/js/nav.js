// Document on ready that enables my transparent to solid color on navbar
$(document).ready(function() {

  $(window).scroll(function() {

    // adds and removes a class to go from transparent to solid
    if ($(window).scrollTop()>300) {
      $('nav').addClass('blue-grey lighten-1');
    } else {
      $('nav').removeClass('blue-grey lighten-1');
    }
  });

  $("#sendForm").on("click", function () {
    $(".contact-section").html("<div class='row'>"
     + "<div class='col l12'>" + "<h4 class='blue-grey-text'>Thank You!</h5>"
     + "<p class='flow-text grey-text text-darken-2'>Awesome! I got your question and will be in touch when I'm available.</p>" + "</div></div>");
  });
});
