$(document).ready(function() {

	// menu hover
	if($(window).width() > 992) {

		$('.sub_nav, header').hover(function()
		{
			$('.social_list').hover(function() {
				$('#child_menu').addClass('sub_nav_enter');
			})
			$('#child_menu').addClass('sub_nav_enter');
		},
		function()
		{
			$('#child_menu').removeClass('sub_nav_enter');
			// $('.sub_nav > div > ul > .nav-item').css('visibility', 'hidden');
		});
	}

	// contact us slide in
	(function showContactUs() {
		var $contactBtn = $('.contact_us_js');

		setTimeout(function() {
			$('.contact_container').toggleClass('slide_in');
		}, 3000);

		$contactBtn.on('click', function() {
			$('.contact_container').toggleClass('slide_in');
		});
	})();

	var heroImgMarginTop = 49; // this is set in css to account for menu. it is actually a negative value.
	setTimeout(function() {
		if($(window).width() > 1042) {
			// hero slider
			$('.carousel-item').css('height', ($(window).height() + heroImgMarginTop));

			if($(window).width() > 1600) {
				$('.carousel-item').find('img').css('height', 'auto');
			}
		}
	}, 0);

	// update on window resize
	$(window).resize(function() {

		// keep image aspect ratio
		if($(window).width() <= 1042) {
			$('.carousel-item').css('height', '100%');
		}

		if($(window).width() > 1042) {
			// hero slider
			$('.carousel-item').css('height', ($(window).height() + heroImgMarginTop));

			if($(window).width() > 1600) {
				$('.carousel-item').find('img').css('height', 'auto');
				console.log('> 1600');
			}
			else {
				$('.carousel-item').css('height', ($(window).height() + heroImgMarginTop));
			}
		}
	});

});