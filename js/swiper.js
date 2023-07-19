
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
        520: {
          slidesPerView: 1.3,
        },
        700: {
          slidesPerView: 1.8,
        },
        850: {
          slidesPerView: 2.2,
        },
        870: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3,
        },
        1360: {
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
      320: {
        slidesPerView: 1,
      },
      624: {
        slidesPerView: 1.2,
      },

      900: {
        slidesPerView: 1.5,
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
    320: {
      slidesPerView: 1,
    },
    380: {
      slidesPerView: 1.1,
    },
    540: {
      slidesPerView: 1.2,
    },
      740: {
        slidesPerView: 2,
      },
      990: {
        slidesPerView: 2.5,
      },
      1160: {
        slidesPerView: 2.5,
      },
      1312: {
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
