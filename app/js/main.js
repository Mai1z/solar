$(function(){

  // ===== Калькулятор =====

  $('#selection-choose').on('click', function() {
    $('.selection-calc__result').toggleClass('active');
    $('.selection__calc').toggleClass('active2');
  });

  // ===== Мобильное меню =====  

  $('.header-mob__burg-btn').on('click', function() {
    $('.header-mob__burg').toggleClass('activeburg');
  });

  $('.header-mob__burg-btn').on('click', function() {
    $('.header-wrapper').toggleClass('activewrap');
    $('.header-wrapper__btn').toggleClass('closewrap');
  });

  $('.header-wrapper__btn').on('click', function() {
    $('.header-wrapper__btn').toggleClass('closewrap');
    $('.header-wrapper').toggleClass('activewrap');
    $('.header-mob__burg').toggleClass('activeburg');
  });

  // ===== Списки футера =====  

  $('.footer__wrap').on('click', function() {
    $(this).toggleClass('activefoot');
  });

  $('.footer__item').on('click', function() {
    $(this).toggleClass('activefoot');
  });

});



