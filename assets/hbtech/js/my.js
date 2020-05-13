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
	
});