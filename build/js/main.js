(function () {
'use strict';

$('.up-button').click(function (e) {
	e.preventDefault();
	$('body,html').animate({ scrollTop: 0 }, 800);
});

$('.carousel').slick({
	dots: true,
	infinite: true,
	speed: 600,
	fade: true,
	cssEase: 'linear'
});

$('.hamburger-box').click(function () {
	var menu = $('#nav');
	if (menu.is(':hidden')) {
		menu.show();
		$(this).addClass('is-active');
	} else {
		$(this).removeClass('is-active');
		menu.hide();
	}
});

if (window.matchMedia('(max-width: 991px)').matches) {
	$('.dropdown-link').click(function (e) {
		e.preventDefault();
		var dropdown = $(this).next();
		if (dropdown.is(':hidden')) {
			dropdown.show();
			$(this).addClass('is-active');
		} else {
			$(this).removeClass('is-active');
			dropdown.hide();
		}
	});
}
$('.link--more').click(function (e) {
	e.preventDefault();
	$('.header').addClass('high-index');
	$('.project-modal').addClass('show-modal');
	$('body').addClass('project-modal-open');
});
$('.project-close').click(function (e) {
	e.preventDefault();
	if ($('.header').hasClass('high-index')) {
		$('.header').removeClass('high-index');
	}
	$('.project-modal').removeClass('show-modal');
	$('body').removeClass('project-modal-open');
});

if (window.matchMedia('(min-width: 992px)').matches) {
	$('.main-content-wrapper').stickyStack({
		containerElement: '.main-content-wrapper',
		stackingElement: '.slider'
	});
}

}());
//# sourceMappingURL=main.js.map
