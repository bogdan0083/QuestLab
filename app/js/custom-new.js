$(document).ready(function () {

  // variables
  var $franchisePromoSlider = $('.franchise-promo-slider');
  var $promoSlider = $('.promo-slider');

  // franchise slider
  var franchiseSlider = new Swiper($franchisePromoSlider, {
    autoplay: 6000,
    speed: 900,
    loop: true,
    spaceBetween: 0,
    pagination: '.franchise-promo-slider .swiper-pagination',
    paginationClickable: true,
    autoplayDisableOnInteraction: false
  });

  var $slides = $('.promo .swiper-slide');
  var $currentNum = $('.promo .current');
  var $lastNum = $('.promo .last');

  // promo slider
  var promoSlider = new Swiper($promoSlider, {
    autoplay: 6000,
    speed: 900,
    loop: true,
    spaceBetween: 0,
    pagination: '.promo .swiper-pagination',
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
    onSlideChangeStart: function (swiper) {
      console.log($slides);
      var $activeSlide = $slides.filter('.swiper-slide-active')
      $currentNum.text( $slides.index( $activeSlide ) + 1 );
    }
  });
  // Анимация линий на странице франшизы (и на главной)
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
		// TourTimeline.to(".crc_ln1", 0.5, {width:"30%"});
		TourTimeline.to(".crc_ln0", 0.5, {width:"65%"});
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

  // Слайдер услуг (Сервисы)
  var servicesSlider = new Swiper('.services-slider', {
      autoplay: 0,
      speed: 1200,
      loop: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      nextButton: '.services-slider .swiper-button-next',
      prevButton: '.services-slider .swiper-button-prev',
      pagination: '.services-slider .swiper-pagination',
      paginationType: 'fraction',
      autoHeight: true,
  	paginationFractionRender: function (swiper, currentClassName, totalClassName) {
  	      return '<span class="' + currentClassName + '"></span>' +
  	             ' <span class="spr"></span> ' +
  	             '<span class="' + totalClassName + '"></span>';
  	},
      observer:true,
      observeParents:true,
      // preventClicks: false,
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 0
        }
    }
  });


  // Сцена 3д тура (анимация при скролле в секцию)
  var $show3d = $('.show3d');

  if ($show3d.length > 0) {
    var controller = new ScrollMagic.Controller();
    var show3dTl = new TimelineMax();

    show3dTl.to(".show3d .line2", 1, {width: "2000px"});
    show3dTl.to(".show3d .line1", 1, {width: "279px"});
    show3dTl.to(".show3d-circle", 1, {className: "+=active"}, "-=1");
    show3dTl.to(".show3d .three, .show3d .d", 1, {className: "+=active"});
    show3dTl.to(".spaced", 1, {className: "+=active"});
    show3dTl.to(".show3d-link", 1, {className: "+=active"}, "-=0.7");
    show3dTl.to(".play-link", 1, {className: "+=active"}, "-=1");
    show3dTl.to(".show3d-desc", 1, {className: "+=active"}, "-=1");
    var scene = new ScrollMagic.Scene({
        triggerElement: '.show3d'
    })
    .setTween(show3dTl)
    .addTo(controller);
  }



  // табы
  var $tabs = $('.tab-pane');

  var tabsSliderSettings = {
    onSlideChangeStart: function (swiper) {
      var idx = swiper.realIndex;
      $('.tabs')
        .find('.tab-pane')
        .removeClass('js-active')
        .eq(idx)
        .addClass('js-active');
    },
    autoHeight: true,
    noSwiping: true
  };
  var slider = null;
  var vacanciesList = null;

  // Срабатывает при клике на таб
  function onTabPaneClick(e) {
    e.preventDefault();
    var $target = $(this);
    var idx = $target.index();
    var $parent = $target.closest('.tabs');
    var $tabs = $parent.find('.tab-pane');
    var sliderName = $( $parent.data('slider') );
    $tabs.removeClass('js-active');
    $target.addClass('js-active');
    $(sliderName).slideDown();
    if (slider) {
      slider.slideTo(idx);
    } else {
      slider = new Swiper(sliderName, tabsSliderSettings);
      slider.slideTo(idx);
      }
      // Если селектор у слайдера .vacancies-slider, значит это вакансии.
      // Нам нужно инициализовать еще один слайдер внутри
      if (sliderName.selector === '.vacancies-slider') {
      var $vacanciesTrigger = $('.js-show-vacancies');

      $vacanciesTrigger
        .addClass('active');

      $vacanciesTrigger
        .find('span')
        .eq(0)
        .text('Скрыть вакансии');

        vacanciesList = new Swiper('.vacancies-list', {
          nested: true,
          autoHeight: true,
          nextButton: '.vacancies-list .swiper-button-next',
          prevButton: '.vacancies-list .swiper-button-prev',
          pagination: '.vacancies-list .swiper-pagination',
          paginationType: 'fraction',
          paginationFractionRender: function (swiper, currentClassName, totalClassName) {
                return '<span class="' + currentClassName + '"></span>' +
                       ' <span class="spr"></span> ' +
                       '<span class="' + totalClassName + '"></span>';
          }
        });
    }
  }

  $tabs.click(onTabPaneClick);

  // Аккордеон в списке вакансий
  var $vacancyTrigger = $('.js-vacancy-trigger');
  var $vacanciesListWrapper = $('.vacancies-list .swiper-wrapper');

  $('.vacancy').on('click', '.js-vacancy-trigger', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().next().toggle();
    vacanciesList[0].updateAutoHeight();
    vacanciesList[1].updateAutoHeight();
    slider.updateAutoHeight();
  });

  $('.js-show-vacancies').click(function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass('active')) {
      $this.addClass('active');
      $('.tabs .tab-pane').eq(0).trigger('click');
      $this.find('span').eq(0).text('Скрыть вакансии');
    } else {
      $this.removeClass('active');
      $('.vacancies-slider').slideToggle();
      $('.vacancies .tab-pane').removeClass('js-active');
      $this.find('span').eq(0).text('Показать вакансии');
    }
  });

  // -------------------------------------------------
  // GOOGLE MAP
  var map1;

  var myLatLng = {
    lat: 55.753782,
    lng: 37.625084
  }

  var labQuestLatLng = {
    lat: 55.732284,
    lng: 37.552763
  }

  // map styles (colors)
  var mapStyles = [ { "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" } ] }, { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#bdbdbd" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#dadada" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#c9c9c9" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] } ];

  (function initMap() {

    // Инициализация карты на странице "О компании"
    if ($('.location-map').length > 0) {
      map1 = new google.maps.Map(document.querySelector('.location-map'), {
        center: myLatLng,
        zoom: 13,
        styles: mapStyles,
        disableDefaultIO: true
      });
      var marker = new google.maps.Marker({position: labQuestLatLng, icon: 'img/map-pointer.png'});
      marker.setMap(map1);
    }

    // Карта оффисов
    if ($('.offices-map').length > 0) {
      // Это массив с данными для карты.
      // Каждый обьект в массиве это данные для каждого офиса
      // локация, местоположение, название и т.д
      // сюда тащим данные с помощью аякса.
      // Цвета для карты метро есть в styles.css (поиск по .address-metro-link)
      var mapsData = [
        {
          coordinates: {lat: 55.732272, lng: 37.552741},
          name: '«Бережковский»',
          location: '121059, г. Москва, Бережковская наб., д. 20, стр. 13',
          worktime: 'пн.-пт.  7:00-20:00 сб., вс.  выходной',
          metros: [
            {
              name: 'Киевская',
              color: 'brown'
            },
            {
              name: 'Студенческая',
              color: 'blue'
            }
          ]
        },
        {
          coordinates: {lat: 55.751911, lng: 37.820347},
          name: '«Бережковский»',
          location: '121059, г. Москва, Бережковская наб., д. 20, стр. 13',
          worktime: 'пн.-пт.  7:00-20:00 сб., вс.  выходной',
          metros: [
            {
              name: 'Киевская',
              color: 'brown'
            },
            {
              name: 'Студенческая',
              color: 'blue'
            }
          ]
        }
      ];

      var officesMap = new google.maps.Map(document.querySelector('.offices-map'), {
        center: myLatLng,
        zoom: 13,
        styles: mapStyles,
        disableDefaultIO: true
      });

      // Обходим обьект с данными офисов и добавляем на карту
      mapsData.forEach(function (office) {
        // Сначала добавляем маркер
        var marker = new google.maps.Marker({position: office.coordinates, icon: 'img/map-pointer.png'});

        // Теперь добавляем всплывашку
        var content =
          // Заголовок с названием офиса
          '<h4>' + office.name + '</h3>' +
          // локация
          '<div class="map-location">' + office.location + '</div>' +
          // блок с метро
          '<div class="map-metros">';

        // обходим объект с данными о метро и добавляем в всплывашку
        office.metros.forEach(function (metro) {
          content += '<div class="address-metro-link color-' + metro.color + '">' +
            '<span class="dot"></span>' + '<span class="text">' + metro.name + '</span></div>';
        });

        content += '</div>';

        // Рабочие дни
        content += '<div class="map-worktime">' + office.worktime + '</div>';

        // Кнопка Как добраться
        content += '<a class="button button-icon button-gray js-show-location" href="#"><span>Как добраться</span><span class="ic"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><path fill="#4e5b67" d="M9.9 14.28L8.79 8.14 2.46 7.08 15.3 1.66zM16.28.11L.96 6.61c-.55.23-.59.68-.08 1l7.07 1.46 1.35 7c.15.24.33.36.5.36.2 0 .38-.15.5-.44L16.85.69c.18-.42.08-.67-.21-.67-.1 0-.22.03-.36.09z"/></svg></span></a>';

        var info = new SnazzyInfoWindow({
            marker: marker,
            content: content,
            closeOnMapClick: false
        });

        marker.setMap(officesMap);
      });
    }

    if ($('.address-single-map').length > 0) {
      var addressSingleMap = new google.maps.Map(document.querySelector('.address-single-map'), {
        center: {lat: 55.751911, lng: 37.820347},
        zoom: 13,
        styles: mapStyles,
        disableDefaultIO: true
      });
      var marker = new google.maps.Marker({position: {lat: 55.751911, lng: 37.820347}, icon: 'img/map-pointer.png'});
      marker.setMap(addressSingleMap);
    }
  })();

  // Карта метро. Документация: (https://github.com/ymaps/metro-jsapi)
  ymaps.modules.require(['TransportMap']).spread(function (TransportMap) {
    TransportMap.create('moscow', 'metro-map', {}, {
      path: 'metro-data/',
      lang: 'ru'
    }).then(function (transportMap) {
      console.log('map created');
    }).done();
    });
  // Показываем локацию при клике на "Показать на карте"

  $('.js-show-location').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var $parent = $this.parent();
    $parent.closest('.our-location').find('.js-map-trigger').addClass('active');
    $parent.fadeOut();
    map1.panTo(labQuestLatLng);
    map1.setZoom(15);
  });


  // Показываем адрес при клике на крестик

  $('.js-map-trigger').click(function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $this.next().next().find('.our-location-content').fadeIn();
  });

  // Баннер слайдер .banner-slider)
  var bannerSlider = new Swiper('.banner-slider', {
    pagination: '.banner-slider .swiper-pagination',
    paginationClickable: true
  });

  if ($(window).width() < 1220) {
    var franchiseStepSlider = new Swiper('.franchise-steps', {
      slidesPerView: 'auto',
    });
  }

  // Всплывающая подсказка (tooltip)
  // Плагин взят с бутстрапа
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
  });

  $('.js-option').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });

  var $testsTrigger = $('.js-tests-item-trigger');
  $testsTrigger.click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });

  var $testBlockTrigger = $('.js-test-block-trigger');
  $testBlockTrigger.click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });


  // Открываем фильтры на странице адресов
  var gridHeight = null;

  $('.js-toggle-filters').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var $grid = $this.prev();
    $this.toggleClass('active');
    if ($this.hasClass('active')) {
      $this.find('span').text('Скрыть');
      $grid.removeClass('grid-closed');
    } else {
      $this.find('span').text('Показать все услуги');
      $grid.addClass('grid-closed');
    }
  });

  // Список оффисов (слайдер)
  var adressListsSlider = new Swiper('.address-lists', {
    nested: true,
    autoHeight: true,
    nextButton: '.address-lists .swiper-button-next',
    prevButton: '.address-lists .swiper-button-prev',
    pagination: '.address-lists .swiper-pagination',
    paginationType: 'fraction',
    observe: true,
    observeParents: true,
  	paginationFractionRender: function (swiper, currentClassName, totalClassName) {
  	      return '<span class="' + currentClassName + '"></span>' +
  	             ' <span class="spr"></span> ' +
  	             '<span class="' + totalClassName + '"></span>';
  	}
  });

});
