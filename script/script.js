let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu_btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#nav_close').onclick = () => {
    navbar.classList.remove('active');
}


let hero = document.querySelector('#hero');

document.querySelector('#hero').onclick = () => {
    navbar.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
}