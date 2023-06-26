var swiper = new Swiper(".sliderSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1400: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
    scrollbar: {
      el: ".slider-swiper-scrollbar",
      hide: true,
    },
});

var swiper = new Swiper(".infoBoxSwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2.4,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 2.6,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 2.6,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 2.6,
            spaceBetween: 15,
        },
    },
});

var swiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    // centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //     el: ".blog-swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".blogswiper-button-next",
        prevEl: ".blogswiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    mousewheel: {
        forceToAxis: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});