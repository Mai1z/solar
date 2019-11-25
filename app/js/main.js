
// ===== Калькулятор =====

$('#selection-choose').on('click', function() {
	$('.selection-calc__result').toggleClass('active');
	$('.selection__calc').toggleClass('active2');
});

// ===== Мобильное меню =====  

function toggleMenu() {
	$('.header-wrapper__btn').toggleClass('closewrap');
	$('.header-mobmenu').toggleClass('activewrap');
	$('.header-mob__burg').toggleClass('activeburg');
	$('body').toggleClass('fixed');
}

$('.header-mob__burg-btn, .header-wrapper__btn, .header-mobmenu').on('click', toggleMenu);
$('.header-wrapper').on('click', function(e) {
	e.stopPropagation();
	return 0;
});


// ===== Действия в моб. меню =====

$('.catalog__btn').on('click', function() {
	$('.header-wrapper__inner').toggleClass('show');
	$('.header-wrapper__catalog').toggleClass('show');
});

// ===== Списки футера =====  

$('.footer__wrap').on('click', function() {
	$(this).toggleClass('activefoot');
});

$('.footer__item').on('click', function() {
	$(this).toggleClass('activefoot');
});



