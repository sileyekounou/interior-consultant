const menuHamburger = document.querySelector('.menu')
const navLinks = document.querySelector('#nav-links')
const svg = document.querySelector('#svg')
const title = document.querySelector('#titre')
const main = document.querySelector('#main')
const footer = document.querySelector('#footer')

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    if (navLinks.classList.contains('mobile-menu')) {
        svg.setAttribute('d', 'M6 18L18 6M6 6l12 12')
        navLinks.classList.toggle('ml-[-100%]')
        title.classList.toggle('hidden')
        main.classList.toggle('hidden')        
        footer.classList.toggle('hidden')        
    } else {
        svg.setAttribute('d', 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
        navLinks.classList.toggle('ml-[-100%]')
        title.classList.toggle('hidden')
        footer.classList.toggle('hidden')        
        main.classList.toggle('hidden')
    }
})
