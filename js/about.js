// Declaration of variables
const hamburger = document.querySelector('.about-hamburger');
const hamburgerPopUpNav = document.querySelectorAll('.pop-up-ul-text');

// Hamburger event
hamburger.addEventListener('click', () => {
    document.getElementsByClassName('about-hamburger')[0].style.display = 'none';
    document.getElementsByClassName('hamburger-pop-up')[0].style.display = 'block';
});


function AboutClosePopUp() {
    document.getElementsByClassName('about-hamburger')[0].style.display = 'block';
    document.getElementsByClassName('hamburger-pop-up')[0].style.display = 'none';
};

hamburgerPopUpNav.forEach((link) => link.addEventListener('click', () => {
    document.getElementsByClassName('about-hamburger')[0].style.display = 'block';
    document.getElementsByClassName('hamburger-pop-up')[0].style.display = 'none';
}));