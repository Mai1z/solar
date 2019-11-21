$(function(){

  $('#selection-choose').on('click', function() {
    $('.selection-calc__result').toggleClass('active');
    $('.selection__calc').toggleClass('active2');
  });

  $('.header-mob__burg-btn').on('click', function() {
    $('.header-mob__burg').toggleClass('activeburg');
  });

});

