const menu = document.querySelector('.header__menu');
const openclose = document.querySelector('.header__hamburger');

openclose.addEventListener('click', () => {
    document.querySelector('.header__menu').classList.toggle('header__menu_active');
    openclose.classList.toggle('header__hamburger_active');
});

$(document).ready(function() {
    $('.reviews__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: $('.arrow_left'),
        nextArrow: $('.arrow_right')
    });
});

const reviews = document.querySelectorAll('.reviews__review');

reviews.forEach( (item) => {
    item.style.display = 'flex';
});

const switcher = document.querySelectorAll('.offer__switcher-item');
const plans = document.querySelectorAll('.offer__plan-price');

switcher.forEach( (item) => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('offer__switcher-item_active')) {
            switcher.forEach( (item) => {
                item.classList.toggle('offer__switcher-item_active');
            });
            plans[0].classList.toggle('offer__plan-price_standart-yearly');
            plans[1 ].classList.toggle('offer__plan-price_premium-yearly');
        }
    });
});
