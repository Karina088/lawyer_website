'use strict';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href').substring(1)).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

const burgerEl = document.querySelector('.menu__burger')
burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('active')
    document.querySelector('.main__menu__nav').classList.toggle('open')
})

const modalEl = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const headerEl = document.querySelector('header')
const allNewsEl = document.querySelector('.all_news')

function toggleActiveModalNews() {
    modalEl.classList.toggle('active-modal')
    headerEl.classList.toggle('header-active')
    allNewsEl.classList.toggle('header-active')
}

document.querySelector('.top__menu_button').addEventListener('click', () => { 
    toggleActiveModalNews()
})

modalClose.addEventListener('click', () => {
    toggleActiveModalNews()
})

