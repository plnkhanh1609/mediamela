const swiper = new Swiper(".dealzone-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".dealzone-next",
        prevEl: ".dealzone-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
    },
});

const best_seller_swiper = new Swiper(".bestseller-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bestseller-next",
        prevEl: ".bestseller-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 2,
        },
    },
});
const feature_swiper = new Swiper(".feature-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bestseller-next",
        prevEl: ".bestseller-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 6,
        },
    },
});
const carousel_swiper = new Swiper(".carousel-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".bestseller-next",
        prevEl: ".bestseller-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 6,
        },
    },
});

const testimonial_swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    // spaceBetween: 24,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bestseller-next",
        prevEl: ".bestseller-prev",
    },
});
