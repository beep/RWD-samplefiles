(function( $ ) {
	// DOM-ready auto-init
	$( function(){

		// Slides!
		if ( document.documentElement.clientWidth >= 480 ) {
			$.get("-/ajax/slides.html", function(data) {
				$(".welcome .slides")
					.append( data )
					.carousel();
			});
		}

	} );
}( jQuery ));