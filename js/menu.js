

$( document ).ready(function() {
	$(document).scroll(function() {

		var win = $(window);
		var logodiv = $('.logo');
		
		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();
		
		var bounds = logodiv.offset();
	    bounds.right = bounds.left + logodiv.outerWidth();
	    bounds.bottom = bounds.top + logodiv.outerHeight();
		
	    if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
	    	$("#cssmenu").removeClass("cssmenufixed");
	    }else {
	    	$("#cssmenu").addClass("cssmenufixed");
	    }
	  
	});
	
});