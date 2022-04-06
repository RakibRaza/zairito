(function ($) {
  "use strict";



  jQuery(document).ready(function () {

    /*-------------------------------------------
   brads-slide active
   --------------------------------------------- */
    $('.brands').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      prevArrow: '<i class="slick-prev fas fa-angle-left"></i> ',
      nextArrow: '<i class="slick-next fas fa-angle-right"></i> ',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });
  })
  // Kursor
  // new kursor({
  //   type: 1,
  //   color: '#EF1B27'
  // })
})(jQuery);