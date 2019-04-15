document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    duration: 600,
    indicators: true,
    fullWidth: true,

  });
  autoplay()
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
  }
});

(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space
