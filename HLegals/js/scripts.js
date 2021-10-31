const swiper = new Swiper('.logo-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:2,
    spaceBetween:20,
    autoplay: {
        delay: 5000,
    },

    breakpoints: {
        // when window width is >= 640px
        768: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },

    // If we need pagination
    pagination: {
        el: '.logo-pagination',
    },
});