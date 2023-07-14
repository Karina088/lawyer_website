'use strict';

const menuEl = document.getElementById("menu")
const stickyEl = menuEl.offsetTop

function getStickyMainMenu() {
    if (window.pageYOffset >= stickyEl) {
        menuEl.classList.add('sticky')
    } else {
        menuEl.classList.remove('sticky')
    }
}

window.addEventListener('scroll',  () => { 
    getStickyMainMenu() 
})

