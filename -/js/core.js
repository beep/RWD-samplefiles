(function( $ ) {
	// DOM-ready auto-init
	$( function(){

		// Slides!
		// First, we’ll check to see if the viewport is wider than 500px.
		if ( document.documentElement.clientWidth >= 500 ) {

			$.get( "-/ajax/slides.html", function( data ) {
				$( ".welcome .slides" )
					.append( data )
					.carousel();
			});
		}

	} );
}( jQuery ));