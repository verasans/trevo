( function( $ ) {
$( document ).ready(function() {
	var currentMenuItem = $('#cssmenu .active span').text();
$('#cssmenu').prepend('<div id="menu-button">' + currentMenuItem + '</div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );
