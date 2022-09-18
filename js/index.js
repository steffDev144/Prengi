$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 2000,
        // adaptiveHeight: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});