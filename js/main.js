/*********************  плавный скролл    ***************/
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
  slidesToScroll: 1,
  autoplay: true
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

/*---------------- фильтр portfolio   ---------------*/
$(function () {
  $('.portfolio-nav a').click(function (event) {
    event.preventDefault();
    var get_id = this.id;
    var get_current = $('.card.' + get_id);
    $('.card').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#all').click(function () {
    $('.card').show(500);
  });
});

/*-------------     modal windows   -------------*/
$('[data-modal]').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data('modal');

  $(modalId).addClass('show');
  $('body').addClass('no-scroll');
});

$('.close').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents('.portfolio-modal');

  modalParent.removeClass('show');
  $('body').removeClass('no-scroll');
});

$(document).on('click', function (e) {
  if (!$(e.target).closest(".card .img").length) {
    $('.portfolio-modal').removeClass('show');
    $('body').removeClass('no-scroll');
  }
  e.stopPropagation();
});

/************   video remove    *************/
$('.video').click(function () {
  $('.video').addClass('remove');
});

/************    blog slick    **************/
$('.blog-slider').slick({
  prevArrow: $('.blog-arrow-left'),
  nextArrow: $('.blog-arrow-right'),
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1
});