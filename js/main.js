const navBar = document.querySelector('.navbar');
const toggle = document.querySelector('.toggler');
const navLink = document.querySelectorAll('.nav_link');


//open mobile menu
if (toggle) {
    //we add the show-menu class to the div tag with the nav_menu class
    toggle.addEventListener('click', () => {
        navBar.classList.toggle('show-menu');
    })
}


//remobe mobile menu
function linkAction() {
    navBar.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//change toggler
toggle.addEventListener('click', () => {
    //add or remove icon
    toggle.classList.toggle("fa-times");
    toggle.classList.toggle("close");
})

// Change background header
function scrollHeader() {
    const header = document.querySelector('header');
    // when the scroll is greater than 100 viewport height,add the scroll-header classto the header tag
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);