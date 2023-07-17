
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
        320: {
          slidesPerView: 1,
        },
        390: {
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


const swiperReiews = new Swiper('.swiper__reviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
 
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1.2,
      },
      1220: {
        slidesPerView: 2,
      }
    },

    mousewheel: {
      forceToAxis: true,
    }, 
    
    navigation: {
      nextEl: '.swiper-button-arrow',
      prevEl: '.swiper-button',
    },
});


const swiperNews = new Swiper('.swiper__news', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
 
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1220: {
        slidesPerView: 3,
      }
    },

    preloadImages: false,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    mousewheel: {
      forceToAxis: true,
    }, 
    a11y: {
      enabled: true,
    },
   hashNavigation: {
    watchState: true,
   }
});
