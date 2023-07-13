const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:  {
        delay: 5000,
    },

    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1220: {
          slidesPerView: 4,
        }
      },

      mousewheel: {
        forceToAxis: true,
      },  
});
