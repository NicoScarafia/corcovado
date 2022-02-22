//// NAVBAR

let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu_btn').onclick = () => { navbar.classList.add('active') }
document.querySelector('#nav_close').onclick = () => { navbar.classList.remove('active') }


let hero = document.querySelector('#hero');
document.querySelector('#hero').onclick = () => { navbar.classList.remove('active') }

window.onscroll = () => { navbar.classList.remove('active') }



//// GRID-IMAGES

const images = document.querySelectorAll('.images img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modalImg');
const modalText = document.querySelector('.modalText');
const modalClose = document.querySelector('.modalClose');

// const prevButton = document.querySelector('#prevImg')
// const nextButton = document.querySelector('#nextImg')

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        modalImg.src = image.src;
        modalText.innerHTML = image.alt;
        modal.classList.remove('hidden');

        modalClose.addEventListener('click',() => {
            modal.classList.add('hidden')
        })
    })
})