$('.js-slick')
  .slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    draggable: false,
    fade: true,
    speed: 1000
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $(slick.$slides).removeClass('is-animating');
  })
  .on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $(slick.$slides.get(currentSlide)).addClass('is-animating');
  });
