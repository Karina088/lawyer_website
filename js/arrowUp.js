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
        const scrollY = window.scrollY || document.documentElement.scrollTop
        scrollY > 400 ? this.show() : this.hide()
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


  /*
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  console.log(`Ширина окна браузера: ${windowWidth}px`)
  console.log(`Высота окна браузера: ${windowHeight}px`)

  console.log(`Информация о самом браузере: ${navigator.userAgent} `)
  // console.log(`OC: ${navigator.platform}`)
console.log(location.href)

const bodyElement = document.body
const firstChildNode = bodyElement.firstChild
const lastChildNode = bodyElement.lastChild
console.log(firstChildNode)
console.log(lastChildNode)
const childNodes = bodyElement.childNodes
console.log(childNodes)

for (let node of childNodes) {
  console.log(node) // покажет все узлы из коллекции 
}*/