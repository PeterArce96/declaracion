'use strict';
const documentReady = () =>{
    const heroButtonSi = document.getElementById('heroButtonSi');
    const heroButtonNo = document.querySelector('#heroButtonNo');

    const evitarKCRompanMyBobo = () => {
        heroButtonNo.style.position = 'absolute';
        heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
        heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
    };
    
    heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);