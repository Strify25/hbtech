jQuery(document).ready(function($) {
	$("[name='phone']").inputmask({
		mask: "+7 (999) 999-99-99",
		showMaskOnHover: false
	});

	$('.menuBg').each(function(index, el) {
		$(this).height($(this).parent("ul").height()+100);
	});

	$(document).on('click', '.openSearch', function(event) {
		event.preventDefault();
		
		$('.searchWrap').toggleClass('active').find('input').focus();
	});
	
    $(".inputGroup input, .inputGroup textarea").focus(function(){
    	$(this).parent().addClass("active completed");
    });

    $(".inputGroup input, .inputGroup textarea").focusout(function(){
    	if($(this).val() === "") $(this).parent().removeClass("completed");
    	$(this).parent().removeClass("active");
    })

	$(".imageDots a").hover(function() {
		var parent = $(this).parents(".uk-slideshow");
		var index = $(this).parent().attr("uk-slideshow-item");
		UIkit.slideshow(parent).show(index);
	});

	if ($(window).width() > 960) {
		UIkit.slider("#sertificatesSlider", {draggable:false});
		UIkit.slider("#clientsSlider", {draggable:false});
	}

	if ($(window).width() < 1050) {
		$('.mainNav').remove();

		$.ajax({
			url: '/mobileHeader.html',
			dataType: 'html',
		}).done(function(res) {
			$('.mobileHeaderWrap').append(res);
		});
		
	}

	$(window).resize(function(event) {
		if ($(window).width() < 1050) {
			$('.mainNav').remove();
		}
	});

	$("#callMeForm").validate({
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true
                },
            },
            messages: {
                name: {
                    required: "Поле обязательно для заполнения",
                    maxlength: "",
                },
                phone: {
                    required: "Поле обязательно для заполнения",
                    maxlength: "",
                }
            },
            errorElement: "div",
            errorClass: "uk-form-danger",
            validClass: "uk-form-success",
            submitHandler: function (form) {
            	$('.callMeWrap').addClass('uk-hidden');
            	$('.callMeOk').removeClass('uk-hidden');
                // $.ajax({
                //     url: path,
                //     type: 'POST',
                //     dataType: 'json',
                //     data: $(form).serialize(),
                // }).done(function (res) {
                //     $(form).find('input[type="text"]').val("").parent().removeClass('completed');
                //     $(form).find('textarea').val("").parent().removeClass('completed');
                    
                // })
            }
        }
    );

    UIkit.util.on("#callMe", 'hidden', function() {
    	$('.callMeWrap').removeClass('uk-hidden');
    	$('.callMeOk').addClass('uk-hidden');
    });

    UIkit.util.on("#callMe", 'show', function() {
    	$(".mobile_menu_container, .mobile_sidebar_container").removeClass("loaded");
        $(".mobile_menu_overlay").fadeOut(function() {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        })
    });

	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('.toTop').addClass('active');
		} else {
			$('.toTop').removeClass('active');
		}
	});

	$(document).on("click", ".mobile_menu_container .parentMobileWrap span", function(e) {
        e.preventDefault();
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).parent().siblings("ul").addClass("loaded").addClass("activity");
    });
    $(document).on("click", ".mobile_menu_container .back", function(e) {
        e.preventDefault();
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).parent().parent().removeClass("loaded");
        $(this).parent().parent().parent().parent().addClass("activity");
    });
    $(document).on("click", ".mobileMenuToggle", function(e) {
        e.preventDefault();
        $(".mobile_menu_container").addClass("loaded");
        $(".mobile_menu_overlay").fadeIn();
    });
    $(document).on("click", ".mobileContactsToggle", function(e) {
        e.preventDefault();
        $(".mobile_sidebar_container").addClass("loaded");
        $(".mobile_menu_overlay").fadeIn();
    });
    $(document).on("click", ".mobile_menu_overlay, .closeMobileMenu", function(e) {
        $(".mobile_menu_container, .mobile_sidebar_container, .mobile_filter_container").removeClass("loaded");
        $(".mobile_menu_overlay").fadeOut(function() {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        })
    })

    $(document).on('click', '.mobileFilterBtn', function(event) {
    	event.preventDefault();
        $(".mobile_menu_container").removeClass("loaded");
        $(".mobile_filter_container").addClass("loaded");
    });


	var html5Slider = document.getElementById('square');
	noUiSlider.create(html5Slider, {
	    start: [10, 30],
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 30
	    }
	});
	var inputNumber = document.getElementById('input-number');
	var inputNumber2 = document.getElementById('input-number2');
	html5Slider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    inputNumber.value = values[0];
	    inputNumber2.value = values[1];
	});
	inputNumber.addEventListener('change', function () {
	    html5Slider.noUiSlider.set([null, this.value]);
	});

	var lengthHouse = document.getElementById('lengthHouse');
	noUiSlider.create(lengthHouse, {
	    start: [10, 30],
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 30
	    }
	});
	var inputlengthHouse = document.getElementById('input-lengthHouse');
	var inputlengthHouse2 = document.getElementById('input-lengthHouse2');
	lengthHouse.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    inputlengthHouse.value = values[0];
	    inputlengthHouse2.value = values[1];
	});
	inputNumber.addEventListener('change', function () {
	    lengthHouse.noUiSlider.set([null, this.value]);
	});

	
	var widthHouse = document.getElementById('widthHouse');
	noUiSlider.create(widthHouse, {
	    start: [10, 30],
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 30
	    }
	});
	var inputwidthHouse = document.getElementById('input-widthHouse');
	var inputwidthHouse2 = document.getElementById('input-widthHouse2');
	widthHouse.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    inputwidthHouse.value = values[0];
	    inputwidthHouse2.value = values[1];
	});
	inputNumber.addEventListener('change', function () {
	    widthHouse.noUiSlider.set([null, this.value]);
	});

	var html5SliderMobile = document.getElementById('squareMobile');
	noUiSlider.create(html5SliderMobile, {
	    start: [10, 30],
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 30
	    }
	});
	var inputNumberMobile = document.getElementById('input-numberMobile');
	var inputNumber2Mobile = document.getElementById('input-number2Mobile');
	html5SliderMobile.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    inputNumberMobile.value = values[0];
	    inputNumber2Mobile.value = values[1];
	});
	inputNumberMobile.addEventListener('change', function () {
	    html5SliderMobile.noUiSlider.set([null, this.value]);
	});

	var lengthHouseMobile = document.getElementById('lengthHouseMobile');
	noUiSlider.create(lengthHouseMobile, {
	    start: [10, 30],
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 30
	    }
	});
	var inputlengthHouseMobile = document.getElementById('input-lengthHouseMobile');
	var inputlengthHouse2Mobile = document.getElementById('input-lengthHouse2Mobile');
	lengthHouseMobile.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    inputlengthHouseMobile.value = values[0];
	    inputlengthHouse2Mobile.value = values[1];
	});
	inputNumberMobile.addEventListener('change', function () {
	    lengthHouseMobile.noUiSlider.set([null, this.value]);
	});

	
	var widthHouseMobile = document.getElementById('widthHouseMobile');
	noUiSlider.create(widthHouseMobile, {
	    start: [10, 30],
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 30
	    }
	});
	var inputwidthHouseMobile = document.getElementById('input-widthHouseMobile');
	var inputwidthHouse2Mobile = document.getElementById('input-widthHouse2Mobile');
	widthHouse.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    inputwidthHouseMobile.value = values[0];
	    inputwidthHouse2Mobile.value = values[1];
	});
	inputNumberMobile.addEventListener('change', function () {
	    widthHouseMobile.noUiSlider.set([null, this.value]);
	});
	
});