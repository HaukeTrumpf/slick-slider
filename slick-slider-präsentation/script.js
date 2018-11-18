

$(document).ready(function(){
    $('.pics').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1195,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 885,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 345,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.header').slick({
        autoplay: true,
        speed: 2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        draggable: false,
        centerMode: true,
        dots: true,
        fade: true,
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 620,
                settings: {
                    arrows: true
                }
            },
            {
                breakpoint: 345,
                settings: {
                    arrows: true
                }
            }
        ]
    });

    $('.space').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1195,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear'
                }
            },
            {
                breakpoint: 885,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 345,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


});