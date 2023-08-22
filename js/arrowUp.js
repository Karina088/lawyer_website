const btnUp = {
    el: document.querySelector('.btn__up'),
    show() {
      this.el.classList.remove('hide')
    },
    hide() {
      this.el.classList.add('hide')
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      })
      document.querySelector('.btn__up').addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      })
    }
 } 
  btnUp.addEventListener()