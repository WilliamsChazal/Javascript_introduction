const toggleButton= document.getElementById('toggle__button')
const navbarLinks= document.getElementById('navbar__links')

/* toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active') */
    toggleButton.addEventListener('click', function () {     
        navbarLinks.classList.toggle('active')
})