'use strict';

const linkEl = document.querySelector('.link')
const linkServices = document.querySelector('.link-services')
const serviceEl = document.querySelector('.services')
const linkCompany = document.querySelector('.company-link')
const aboutCompanyEl = document.querySelector('.about__company')
const linkLawyer = document.querySelector('.lawyers-link')
const lawyersEl = document.querySelector('.lawyers')
const linkReviews = document.querySelector('.reviews-link')
const reviewsEl = document.querySelector('.reviews')
const linkNews = document.querySelector('.news-link')
const newsEl = document.querySelector('.news')

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

 linkLawyer.addEventListener('click', () => { 
    scrollTo(lawyersEl)
 })

 linkReviews.addEventListener('click', () => {
    scrollTo(reviewsEl)
 })

 linkNews.addEventListener('click', () => { 
    scrollTo(newsEl) 
})


