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




//Slider

// Smooth scrolling for certificates slider
const certificatesSlider = document.querySelector('.certificates-slider');

// certificatesSlider.addEventListener('wheel', (event) => {
//     event.preventDefault();
//     certificatesSlider.scrollLeft += event.deltaY;
// });
document.addEventListener('DOMContentLoaded', function() {
    const certificates = document.querySelectorAll('.certificate');
    const certificatePopup = document.getElementById('certificate-popup');
    const popupImage = document.getElementById('popup-image');
    const closePopup = document.querySelector('.close-popup');

    certificates.forEach(certificate => {
        certificate.addEventListener('click', function() {
            const certificateImage = this.querySelector('img').src;
            popupImage.src = certificateImage;
            certificatePopup.style.display = 'flex';
        });
    });

    closePopup.addEventListener('click', function() {
        certificatePopup.style.display = 'none';
    });
});


// tilt effect 

const tilt = $('.certificate img').tilt()
tilt.on('tilt.mouseEnte', function (e, transforms) { });