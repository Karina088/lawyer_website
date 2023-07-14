'use strict';
// When the user scrolls the page, execute myFunction
window.onscroll = function () { getStickyMainMenu() }

const menuEl = document.getElementById("menu")

// Get the offset position of the navbar
const stickyEl = menuEl.offsetTop

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function getStickyMainMenu() {
    if (window.pageYOffset >= stickyEl) {
        menuEl.classList.add('sticky')
    } else {
        menuEl.classList.remove('sticky')
    }
}
