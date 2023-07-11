'use strict';

const linkEl = document.querySelector('.link');
const linkServices = document.querySelector('.link-services');
const serviceEl = document.querySelector('.services');

// навигация по сайту
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

linkEl.addEventListener('click', () => {
    scrollTo(serviceEl);
});

linkServices.addEventListener('click', () => {
    scrollTo(serviceEl);
});

