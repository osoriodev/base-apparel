const emailInput = document.querySelector('.hero__email')
const heroBtn = document.querySelector('.hero__btn')

const errorIcon = document.querySelector('.hero__icon--error')
const warningText = document.querySelector('.hero__note')

const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/

const displayElements = () => {
  emailInput.classList.add('hero__email--warning')
  errorIcon.classList.add('visible-element')
  warningText.classList.add('visible-element')
}

const hideElements = () => {
  emailInput.classList.remove('hero__email--warning')
  errorIcon.classList.remove('visible-element')
  warningText.classList.remove('visible-element')
}

const validateEmail = () => {
  let value = emailInput.value
  if (re.test(value)) {
    hideElements()
    emailInput.value = null
  } else {
    displayElements()
  }
}

heroBtn.addEventListener('click', e => {
  e.preventDefault()
  validateEmail()
})
