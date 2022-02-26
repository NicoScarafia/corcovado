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
const modalTxt = document.querySelector('.modalText');
const modalClose = document.querySelector('.modalClose');

const prevButton = document.querySelector('#prevImg')
const nextButton = document.querySelector('#nextImg')


images.forEach((image, index) => {

    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modal.classList.remove('hidden')


        let imageIndex = index;
        let next = imageIndex++;
        let prev = imageIndex--;


        window.addEventListener("keydown", (e) => {

            if (e.code == 'ArrowLeft') {
                modalImg.src = images[prev].src;
                modalTxt.innerHTML = images[prev].alt;
                prev--;
                next = prev + 2;
            } else if (e.code == 'ArrowRight') {
                modalImg.src = images[next].src;
                modalTxt.innerHTML = images[next].alt;
                next++;
                prev = next - 2;
            } else if (e.code === 'Escape') {
                modal.classList.add('hidden')
            }
        });

        prevButton.addEventListener("click", () => {
            modalImg.src = images[prev].src;
            modalTxt.innerHTML = images[prev].alt;
            prev--;
            next = prev + 2;
        });

        nextButton.addEventListener("click", () => {
            modalImg.src = images[next].src;
            modalTxt.innerHTML = images[next].alt;
            next++;
            prev = next - 2;
        });

        modalClose.addEventListener("click", () => {
            modal.classList.add('hidden')
        });
    });
});


