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


// ANIMATIONS W/ GSAP

gsap.from('.navbar', { opacity: 0, duration: 1, y:-60,  ease: "power2.out"}) 
gsap.from('.nosotros-button', { opacity: 0, duration: 0.3, ease: "power1.out", delay: 1.8})


// scroll trigger
gsap.registerPlugin(ScrollTrigger)

gsap.from('.nosotros-texto', {
    scrollTrigger: {
        trigger: '.nosotros-container',
    },
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
})

gsap.from('.nosotros-imagen', {
    scrollTrigger: {
        trigger: '.nosotros-container',
    },
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    delay: 1.5,
})

gsap.from('.card', {
    scrollTrigger: {
        trigger: '.card',
    },
    opacity: 0,
    ease: "power2.out",
    duration: 0.3,
})

gsap.from('.images', {
    scrollTrigger: {
        trigger: '.images',
    },
    opacity: 0,
    ease: "power2.out",
    duration: 2.5
})

