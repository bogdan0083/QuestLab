$(document).ready(function () {

  // variables
  var $franchisePromoSlider = $('.franchise-promo-slider');

  // franchise slider
  var franchiseSlider = new Swiper($franchisePromoSlider, {
    autoplay: 6000,
    speed: 900,
    loop: true,
    spaceBetween: 0,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplayDisableOnInteraction: false
  });

  // Анимация линий на странице франшизы
  var franchiseTl = new TimelineMax();

  franchiseTl
    .to('.rect-first .line1', 0.5, {width: "32%"})
    .to('.rect-first .line2', 0.5, {height: "100%"})
    .to('.rect-first .line3', 0.5, {width: "100%"})
    .to('.rect-first .line4', 0.5, {height: "100%"})
    .to('.rect-second .line1', 0.5, {height: "100%"})
    .to('.rect-second .line2', 0.5, {width: "100%"})
    .to('.rect-second .line3', 0.5, {height: "100%"})
    .to('.rect-second .line4', 3, {width: "2000px"})

  if ($('.d3_tur-secondary').length > 0) {
    // 3д тур (.d3_tur) На странице франшизы
    var controller = new ScrollMagic.Controller();
    var TourTimeline = new TimelineMax();

		TourTimeline.to(".crc_ln2", 0.5, {width: "2000px"});
		TourTimeline.to(".crc_ln1", 0.5, {width:"70%"});
		TourTimeline.to(".crc_ln0", 0.5, {width:"35%"});
		TourTimeline.to(".n", 0.5, {top:"0px"});
		TourTimeline.to(".e", 0.5, {top:"0px"}, "-=0.5");
		TourTimeline.to(".w", 0.5, {top:"0px"}, "-=0.5");
		TourTimeline.to(".lab", 0.5, {scale:"1"});
    var scene = new ScrollMagic.Scene({
        triggerElement: ".d3_tur-secondary"
    })
    .setTween(TourTimeline)
    .addTo(controller);
  }


  // Animate On Scroll (AOS.js)
  AOS.init({
    offset: 300,
    disable: window.innerWidth < 800
  });

  // Окрашиваем в белый цвет прозрачный футер
  if ( $('.hdr_top_in_transparent').length > 0 ) {
    var $hdrTop = $('.hdr_top_in_transparent');

    var hdrIsTransparent = true;
    $(window).on('scroll', function (e) {

      if ($(window).scrollTop() > 140 && hdrIsTransparent) {
        $hdrTop.removeClass('hdr_top_in_transparent');
        hdrIsTransparent = false;
      } else if ($(window).scrollTop() < 140 && !hdrIsTransparent){
        $hdrTop.addClass('hdr_top_in_transparent');
        hdrIsTransparent = true;
      }

    });
  }

});
