
const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navigationLinks = document.getElementsByClassName('navigation_links')[0]
toggleButton.addEventListener('click',() => {navigationLinks.classList.toggle('active')})
