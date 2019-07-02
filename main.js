window.addEventListener( 'load', function( event ) {
	const gridWrappers = document.querySelectorAll( '.blog-grid__wrap' );

	var observer;

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.05
	};

	//observer = new IntersectionObserver( handleIntersect, options );


	observer = new IntersectionObserver( entries => {
		entries.forEach( entry => {
			if ( entry.isIntersecting ) {
				let elem = entry.target;
				const loadingIcon = document.querySelector( '.loading-icon' );
				loadingIcon.classList.add( 'fade-in' );
				// setTimeout( function(){
				// 	loadingIcon.classList.remove( 'fade-in' );
				// 	loadingIcon.classList.add( 'fade-out' );
				// 	setTimeout( function(){
				// 		elem.classList.add( 'fade-in' );
				// 	}, 500);
				// }, 500);

			}
		});
	} );
	
	gridWrappers.forEach( wrapper => {
		observer.observe( wrapper );
	} );

}, false );