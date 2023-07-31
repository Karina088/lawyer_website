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
const formFooter = document.querySelector('.form__footer')

formFooter.addEventListener('submit', (e) => {
    e.preventDefault()
     const value = textareaEl.value

     if (!value.trim()) {
       alert('Пожалуйста, заполните тему вопроса!')
       return
     }
     if (/\n.*\n.*\n.*\n/.test(value)) {
       alert('Пожалуйста, изложите свой вопрос в менее длинной форме!')
       return
     }

     formFooter.submit()
})

//validation all phone
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    
    function mask(event) {
        let keyCode
        event.keyCode && (keyCode = event.keyCode)
        let pos = this.selectionStart
        if (pos < 3) event.preventDefault()
        let matrix = "+7 (___)-___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            })
        i = new_value.indexOf("_")
        if (i != -1) {
            i < 5 && (i = 3)
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&")
        reg = new RegExp("^" + reg + "$")
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false)
    input.addEventListener("focus", mask, false)
    input.addEventListener("blur", mask, false)
    input.addEventListener("keydown", mask, false)
  })
})
