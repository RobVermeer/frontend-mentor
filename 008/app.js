console.log('hello world')

const accordion = document.querySelector('.accordion')
const accordionItems = accordion.querySelectorAll('.accordion .item')

;[...accordionItems].forEach(element => {
  const isActive = element.classList.contains('active')
  element.classList.add('active')
  element.style.height = `${element.getBoundingClientRect().height}px`
  !isActive && element.classList.remove('active')
})

accordion.addEventListener('click', event => {
  const element = event.target
  if (element.tagName !== 'A') return

  const currentActive = document.querySelector('.accordion .active')

  currentActive.classList.remove('active')
  element.closest('.item').classList.add('active')
  event.preventDefault()
})
