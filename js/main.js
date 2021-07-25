$(function(){

    $('.work__slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
      });
});