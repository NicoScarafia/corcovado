const MENU = document.querySelector('.btn__menu');
console.log(MENU)

MENU.addEventListener('click', () => {
    const navList = document.querySelector('.list__menu');
    navList.classList.remove('transform');

    const HERO = document.querySelector('#hero');

    HERO.addEventListener('click', () => {
        navList.classList.add('transform');
    })
    
})

