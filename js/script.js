'use strict';

const linkEl = document.querySelector('.link')
const linkServices = document.querySelector('.link-services')
const serviceEl = document.querySelector('.services')
const linkCompany = document.querySelector('.company-link')
const aboutCompanyEl = document.querySelector('.about__company')

// навигация по сайту
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

linkEl.addEventListener('click', () => {
    scrollTo(serviceEl)
})

linkServices.addEventListener('click', () => {
    scrollTo(serviceEl)
})

linkCompany.addEventListener('click', () => {
    scrollTo(aboutCompanyEl)
 })
