jQuery(document).ready(function($) {
	$('.menuBg').each(function(index, el) {
		$(this).height($(this).parent("ul").height()+100);
	});
	$(document).on('click', '.openSearch', function(event) {
		event.preventDefault();
		
		$('.searchWrap').toggleClass('active').find('input').focus();
	});
});