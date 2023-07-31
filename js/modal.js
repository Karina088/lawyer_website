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
const mainEl = document.querySelector('main')


function toggleActiveModal() {
    modalEl.classList.toggle('active-modal')
    headerEl.classList.toggle('header-active')
    mainEl.classList.toggle('header-active')
}

document.querySelector('.top__menu_button').addEventListener('click', () => { 
    toggleActiveModal()
})

modalClose.addEventListener('click', () => {
    toggleActiveModal()
})


const modalFooterEl = document.querySelector('.modal__footer')
const modalFooterClose = document.querySelector('.modal__footer-close')
const footerEl = document.querySelector('footer')

function toggleActiveModalFooter() {
    modalFooterEl.classList.toggle('active-footer')
    footerEl.classList.toggle('footer-active')
    mainEl.classList.toggle('footer-active')
}

document.querySelector('.footer__btn').addEventListener('click', () => { 
    toggleActiveModalFooter()
})

modalFooterClose.addEventListener('click', () => {
    toggleActiveModalFooter()
})


// validation form textarea 
const textareaEl = document.querySelector('textarea')
const formFooter = document.querySelector('.modal__footer')

formFooter.addEventListener('submit', (e) => {
    e.preventDefault()
     const value = textareaEl.value;

     if (!value.trim()) {
       alert('Пожалуйста, заполните тему вопроса!!');
       return;
     }
     if (/\n.*\n.*\n.*\n/.test(value)) {
       alert('Будьте добры, изложите свой вопрос в менее длинной форме!');
       return;
     }

     formFooter.submit();
})


