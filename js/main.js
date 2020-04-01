/*********************  плавный скролл    *********/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});

/************    header slick    **************/
$('.header-slider').slick({
  prevArrow: $('.header-arrow-left'),
  nextArrow: $('.header-arrow-right'),
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

/*************     search-input    ****************************/
$('.search .fas').click(function () {
  $('.search-input').toggle();
});

$(document).on('click', function (e) {
  if (!$(e.target).closest(".search").length) {
    $('.search-input').hide();
  }
  e.stopPropagation();
});