
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  })


function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light')
    } else {
        setTheme('theme-dark')
    }
}

(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
        document.getElementById('slider').checked = false
    } else {
        setTheme('theme-light')
        document.getElementById('slider').checked = true
    }
})()
