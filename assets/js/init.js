(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.carousel').carousel({
      padding: 5,
      numVisible: 5,
      indicators: true,
      dist: 0,
    });
    $('.materialboxed').materialbox();

    $('input#input_text, textarea#textarea1').characterCounter();
  }); // end of document ready
})(jQuery); // end of jQuery name space
