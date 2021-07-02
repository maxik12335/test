'use strict'

const button = document.querySelectorAll('.productButton'),
      buttonForm = document.querySelector('.formButton'),
      form = document.querySelector('.form'),
      modalWindow = document.querySelector('.modalWindow'),
      product = document.querySelector('.product'),
      main = document.querySelector('.main'),
      body = document.querySelector('body');

// Form
function addModal() {
    modalWindow.style.display = 'flex';
    modalWindow.style.top = document.documentElement.scrollTop + 'px';
    body.style.backgroundColor = '#a7a7a74d';
    body.style.overflow = 'hidden';
}

function removeModal() {
    modalWindow.style.display = 'none';
    body.style.backgroundColor = '';
    body.style.overflow = '';
}
// Open form - click button
button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target == btn) {
            addModal();
        }
    })
});

// Close form
modalWindow.addEventListener('click', (e) => {
    if (e.target && e.target == modalWindow) {
        removeModal();
    }
});



