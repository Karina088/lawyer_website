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
const linkContacts = document.querySelector('.contacts-link')
const footerEl = document.querySelector('.footer')

// site navigation

/*
function scrollToElement(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
    console.log(element.offsetTop + ' show')
}


linkEl.addEventListener('click', () => {
    scrollToElement(serviceEl)
})

linkServices.addEventListener('click', () => {
    scrollToElement(serviceEl)
})

linkCompany.addEventListener('click', () => {
    scrollToElement(aboutCompanyEl)
 })

 linkLawyer.addEventListener('click', () => { 
    scrollToElement(lawyersEl)
 })

 linkReviews.addEventListener('click', () => {
    scrollToElement(reviewsEl)
 })

 linkNews.addEventListener('click', () => { 
    scrollToElement(newsEl) 
})

linkContacts.addEventListener('click', () => {
    scrollToElement(footerEl)
})
*/

// v2
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('anchor ' + anchor)
        console.log('scroll to ' + this.getAttribute('href').substring(1))
        document.querySelector(this.getAttribute('href').substring(1)).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


