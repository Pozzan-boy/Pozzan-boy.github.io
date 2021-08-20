$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    appendDots: $('.carousel__inner')
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    });

    $('input[name=phone]').mask("+380 (99) 99-99-999")

    //Gsap
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin)

    gsap.from('.advantages__item, .consultation', {
        opacity: 0,
        y: 300,
        duration: 1,
        scrollTrigger: {
            trigger: ".advantages__item"
        },
    })

    gsap.from(".carousel", {
        opacity: 0,
        duration: 2,
        scrollTrigger : {
            trigger: ".carousel"
        }
    })
    
    gsap.from(".catalog__tabs", {
        opacity: 0,
        x: -400,
        duration: 2,
        scrollTrigger : {
            trigger: ".catalog__tabs"
        }
    })

    gsap.from(".catalog__content", {
        opacity: 0,
        x: 400,
        duration: 2,
        scrollTrigger : {
            trigger: ".catalog__tabs"
        }
    })

    gsap.from(".reviews__review", {
        opacity: 0,
        y: 400,
        duration: 1,
        scrollTrigger : {
            trigger: ".reviews"
        }
    })

    //Smooth scroll and pageup

    $('.pageup').fadeOut({
        duration: 0
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    })
        
    $('.promo__goto-catalog a').on('click', function(e) {
        e.preventDefault();
        gsap.to(window, {
            duration: 0,
            scrollTo: "#catalog"
        });
    });

    $('.pageup').on('click', function() {
        gsap.to(window, {
            duration: 0,
            scrollTo: 0
        });
    });
    
});



