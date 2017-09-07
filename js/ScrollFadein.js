jQuery( function( $ ) {
	var item = [];
	$( 'body' ).find( '.is-move__item' ).each( function() {
		item.push( $( this ).offset().top );
	} );

	$( window ).scroll( function() {
		var windowH = $( window ).height() + $( window ).scrollTop();
		for( var i = 0; i < item.length; i++ ) {
			$( 'body' ).find( '.is-move__item' ).each( function() {
				if( $( this ).offset().top <= windowH ) {
					$( this ).addClass( 'is-active' );
					$( this ).removeClass( 'is-hidden' );
				}
			} );
		}
	} );
} );
