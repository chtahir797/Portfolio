//media query code
let width = window.matchMedia("(width < 1200px)")
const menu = document.querySelector('.menu-list')
const hamburger = document.querySelector('#hamburger')
const cross = document.querySelector('.cross')
width.addEventListener('change', ()=>{
    if(width.matches){
        menu.style.display = 'none'
        hamburger.style.display = 'block'
    } else{
        menu.style.display = 'block'
        hamburger.style.display = 'none'
    }
})

hamburger.addEventListener('click', () => {
    // menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

