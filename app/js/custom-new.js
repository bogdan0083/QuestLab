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
    onInit: function () {
    }
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
		franchiseTl.to(".crc_ln2", 0.5, {width: "2000px"});
		franchiseTl.to(".crc_ln1", 0.5, {width:"70%"});
		franchiseTl.to(".crc_ln0", 0.5, {width:"35%"});
		franchiseTl.to(".n", 0.5, {top:"0px"});
		franchiseTl.to(".e", 0.5, {top:"0px"}, "-=0.5");
		franchiseTl.to(".w", 0.5, {top:"0px"}, "-=0.5");
		franchiseTl.to(".lab", 0.5, {scale:"1"});
  }

  // Animate On Scroll (AOS.js)
  AOS.init({
    offset: 300,
    disable: window.innerWidth < 800
  });
});
