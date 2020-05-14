jQuery(document).ready(function($) {
	$('.menuBg').each(function(index, el) {
		$(this).height($(this).parent("ul").height()+100);
	});

	$(document).on('click', '.openSearch', function(event) {
		event.preventDefault();
		
		$('.searchWrap').toggleClass('active').find('input').focus();
	});

	$(".imageDots a").hover(function() {
		var parent = $(this).parents(".uk-slideshow");
		var index = $(this).parent().attr("uk-slideshow-item");
		UIkit.slideshow(parent).show(index);
	});

	if ($(window).width() > 639) {
		UIkit.slider("#sertificatesSlider", {draggable:false});
		UIkit.slider("#clientsSlider", {draggable:false});
	}

	var html5Slider = document.getElementById('html5');
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
	
});