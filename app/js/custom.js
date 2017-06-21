jQuery(document).ready(function () {

	$(".fancybox").fancybox({
		padding: [0,0,0,0],
		fitToView: false
	});

	$(".select").selectize({});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".scroll").click(function() {
		$.scrollTo($(".divScroll"), 800, {
			offset: 0
		});
	});

	textAlignment();

	function textAlignment(){
    if ($('.make_deal').length > 0) {
  		var mdlLi = $('.make_deal .make_deal_list li:first-child .desc p').offset().left;
  		$('.d3_tur .desc_txt').css({"margin-left": mdlLi});

  		var newLi = $('.service_support .ss_txt p').offset().left;
  		$('#vc1').css({"padding-left": newLi});
    }
	}

	$(window).resize(function(){
		textAlignment();
	});

	$('.show_btn_list button').click(function(){
		$(this).toggleClass('active');
		$('.guide_forms_slr').slideToggle(600);
		$('.guide_forms_list').slideToggle(600);
		if($(this).text() == 'Показать списком'){
			$(this).text('Свернуть список');
		}else{
			$(this).text('Показать списком');
		}
	});

	if($('input').is('.phone')){
		$('input.phone').inputmask("+7 (999) 999-99-99");
	}

	$('input.email').inputmask({
		mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
		greedy: !1,
		onBeforePaste: function (pastedValue, opts) {
			pastedValue = pastedValue.toLowerCase();
			return pastedValue.replace("mailto:", "");
		},
		definitions: {
			'*': {
				validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
				cardinality: 1,
				casing: "lower"
			},
			"-": {
				validator: "[0-9A-Za-z-]",
				cardinality: 1,
				casing: "lower"
			}
		}
	});


	$(".jbs").validate({
			rules: {
				firstname: "required",
				mail: "required",
				txt: "required",
				checkboxG1: "required"
			},
			messages: {
				firstname: "Введите имя",
				mail: "Введите email",
				txt: "Введите комменатрий",
				checkboxG1: "Обязательное поле"
			}
	});

	$(".hot_ln").validate({
			rules: {
				medical_institution: "required",
				firstname: "required",
				mail: "required",
				txt: "required",
				checkboxG1: "required"
			},
			messages: {
				medical_institution: "Введите наименование медицинского учреждения",
				firstname: "Введите имя",
				mail: "Введите email",
				txt: "Введите сообщение",
				checkboxG1: "Обязательное поле"
			}
	});

	$(".enc").validate({
			rules: {
				medical_institution: "required",
				firstname: "required",
				mail: "required",
				txt: "required",
				checkboxG1: "required"
			},
			messages: {
				medical_institution: "Введите наименование медицинского учреждения",
				firstname: "Введите имя",
				mail: "Введите email",
				txt: "Введите сообщение",
				checkboxG1: "Обязательное поле"
			}
	});

	$(".vsl").validate({
			rules: {
				medical_institution: "required",
				firstname: "required",
				mail: "required",
				txt: "required",
				checkboxG1: "required"
			},
			messages: {
				medical_institution: "Введите наименование медицинского учреждения",
				firstname: "Введите имя",
				mail: "Введите email",
				txt: "Введите сообщение",
				checkboxG1: "Обязательное поле"
			}
	});

	$('.gmb').click(function(){
		$('#hdr_ti_adp .hdr_right').slideToggle();
	});


});

(function($){
	// console.log(navigator.userAgent);
	/* Adjustments for Safari on Mac */
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		// console.log('Safari on Mac detected, applying class...');
		$('html').addClass('safari_mac'); // provide a class for the safari-mac specific css to filter with
	}
})(jQuery);



var controller = new ScrollMagic.Controller();

var mdImg = $('.make_deal .make_deal_list li .desc img');
var mdImgList = TweenMax.staggerTo(mdImg, 3, {
	scale: 1,
	ease: Power3.easeNone,
}, 0.5);
var scene1 = new ScrollMagic.Scene({
    triggerElement: "#md_trigger"
})
.setTween(mdImgList)
.addTo(controller);


var mdTxt = $('.make_deal .make_deal_list li .desc .md_in');
var mdTxtList = TweenMax.staggerTo(mdTxt, 3, {
	y: -50,
	opacity: 1,
	ease: Power3.easeNone,
}, 0.5);
var scene2 = new ScrollMagic.Scene({
    triggerElement: "#md_trigger"
})
.setTween(mdTxtList)
.addTo(controller);

		var l1 = $("#tr1"),
			l2 = $("#tr2"),
			l3 = $("#tr3"),
			l4 = $("#tr4"),
			l5 = $("#tr5"),
			l6 = $("#tr6"),
			l7 = $("#tr7"),
			l8 = $("#tr8"),
			l9 = $("#tr9"),
			make_deal_line = $(".make_deal_line"),
			crc_ln2 = $(".crc_ln2"),
			crc_ln1 = $(".crc_ln1"),
			crc_ln0 = $(".crc_ln0"),
			n = $(".n"),
			e = $(".e"),
			w = $(".w"),
			lab = $(".lab");

  if ($('#tr1').length > 0) {
  	var tl = new TimelineMax();
  		tl.to("#tr1", 0.5, {width:"92px"});
  		tl.to("#tr2", 0.5, {height:"109px"});
  		tl.to("#tr3", 0.5, {width:"305px"});
  		tl.to("#tr4", 0.5, {height:"109px"});
  		tl.to("#tr5", 0.5, {height:"109px"});
  		tl.to("#tr6", 0.5, {width:"305px"});
  		tl.to("#tr7", 0.5, {height:"109px"});
  		tl.to("#tr8", 0.5, {width:"100%"});
  		tl.to("#tr9", 0.5, {height:"480px"});
  		tl.to(".make_deal_line", 0.5, {height:"354px"});
  		tl.to(".crc_ln2", 0.5, {height:"210px"});
  		tl.to(".crc_ln1", 0.5, {width:"70%"});
  		tl.to(".crc_ln0", 0.5, {width:"31%"});
  		tl.to(".n", 0.5, {top:"0px"});
  		tl.to(".e", 0.5, {top:"0px"}, "-=0.5");
  		tl.to(".w", 0.5, {top:"0px"}, "-=0.5");
  		tl.to(".lab", 0.5, {scale:"1"});
  }

var slr_main = new Swiper('.gfs', {
    autoplay: 0,
    speed: 2200,
    loop: true,
    spaceBetween: 0,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    paginationType: 'fraction',
	paginationFractionRender: function (swiper, currentClassName, totalClassName) {
	      return '<span class="' + currentClassName + '"></span>' +
	             ' <span class="spr"></span> ' +
	             '<span class="' + totalClassName + '"></span>';
	},
    observer:true,
    observeParents:true,
    preventClicks: false,
	loopAdditionalSlides: 0,
      breakpoints: {
    384: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    580: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});


var newSlr = new Swiper('.news_slr', {
    autoplay: 0,
    speed: 2200,
    loop: true,
    spaceBetween: 0,
    observer:true,
    observeParents:true,
    preventClicks: false,
	loopAdditionalSlides: 0,
	slidesPerView: 3,
    breakpoints: {
	    850: {
	      slidesPerView: 1,
	      spaceBetween: 0
	    },
	    1250: {
	      slidesPerView: 2,
	      spaceBetween: 0
	    }
  }
});


var newSlr = new Swiper('.mid_list_slr', {
    autoplay: 0,
    speed: 2200,
    loop: true,
    spaceBetween: 0,
    observer:true,
    observeParents:true,
    preventClicks: false,
	loopAdditionalSlides: 0,
	    slidesPerView: 3,
      breakpoints: {
    850: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    990: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  }
});




$(function(){

    var ul = $('.blc_fole_upl ul');

    $('#drop a').click(function(){
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });

    // Initialize the jQuery File Upload plugin
    $('#upload').fileupload({

        // This element will accept file drag/drop uploading
        dropZone: $('#drop'),

        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {

            var tpl = $('<li class="working"><input type="text" value="0" data-width="0" data-height="0"'+
                ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');

            // Append the file name and file size
            tpl.find('p').text(data.files[0].name)
                         .after('<i>(' + formatFileSize(data.files[0].size) + ')</i>');

            // Add the HTML to the UL element
            data.context = tpl.appendTo(ul);

            // Initialize the knob plugin
            tpl.find('input').knob();

            // Listen for clicks on the cancel icon
            tpl.find('span').click(function(){

                if(tpl.hasClass('working')){
                    jqXHR.abort();
                }

                tpl.fadeOut(function(){
                    tpl.remove();
                });

            });

            // Automatically upload the file once it is added to the queue
            var jqXHR = data.submit();
        },

        progress: function(e, data){

            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);

            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            data.context.find('input').val(progress).change();

            if(progress == 100){
                data.context.removeClass('working');
            }
        },

        fail:function(e, data){
            // Something has gone wrong!
            data.context.addClass('error');
        }

    });


    // Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
        e.preventDefault();
    });

    // Helper function that formats the file sizes
    function formatFileSize(bytes) {
        if (typeof bytes !== 'number') {
            return '';
        }

        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }

        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }

        return (bytes / 1000).toFixed(2) + ' KB';
    }

});
