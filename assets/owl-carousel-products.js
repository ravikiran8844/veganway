$(document).ready(function () {
    $('#owl-product-slider').owlCarousel({
      loop: true,
      margin: 20,
      center: true,
      dots: false,
      nav: true,
      navText: [
        '<i class="material-icons-outlined">arrow_circle_left</i>',
        '<i class="material-icons-outlined">arrow_circle_right</i>',
      ],
      responsiveClass: true,

      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 3,
        },
      },
    });
  });