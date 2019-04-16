var count = 0;

$(document).on("click", ".imgPlan", function () {
  $('nav').removeClass('pink lighten-3');
  if (count == 1) {
    $('nav').addClass('pink lighten-3');
    count = 0;
  } else {
    $('nav').removeClass('pink lighten-3');
    count = 1;
  }
})

$(document).on("click", "#materialbox-overlay", function () {
  $('nav').addClass('pink lighten-3');
  count = 0;
})

$(document).ready(function () {

  $(window).scroll(function () {

    if ($(window).scrollTop() > 300) {
      $('nav').addClass('pink lighten-3');
    } else {
      $('nav').removeClass('pink lighten-3');
    }

  });

});


$(document).ready(function () {
  $('.materialboxed').materialbox();
});

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
    setTimeout(autoplay, 7000);
  }
});

(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space
