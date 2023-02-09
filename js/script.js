const responsiveMenu = document.querySelector('#responsiveMenu');
const menuBtn = document.querySelector('.menuBtn');
const nav = document.querySelector('#nav');
const close = document.querySelector('.close');
const links = document.querySelectorAll('.aside-main .link');
const vse = document.querySelector('.vse');
// SCROLL EVECT WITH NUV

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', window.scrollY > 60)
})

// OPEN RESP_MENU

menuBtn.addEventListener('click', () => {
    responsiveMenu.classList.toggle('active');
    document.body.style.overflowY = 'hidden';
})


// CLOSE RESP_MENU

function closeMenu() {
    responsiveMenu.classList.remove('active');
    document.body.style.overflowY = 'auto';
}

close.addEventListener('click', closeMenu);
vse.addEventListener('click', closeMenu);

links.forEach((val) => {
    val.addEventListener('click', closeMenu);
})