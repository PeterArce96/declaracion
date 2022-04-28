'use strict';

const documentReady = () => {
    const heroTitle = document.querySelector('.hero__title');
    const heroButtonSi = document.getElementById('heroButtonSi');
    const heroButtonNo = document.querySelector('#heroButtonNo');
    
    const nowSomosNovios = () =>{
        alert('💞Now somos Novios💞');
        alert('😱Nuestra boda es Mañana😱');
        location.href = 'https://www.youtube.com/watch?v=rdsZfVT6K4E';
    };

    const evitarKCRompanMyBobo = () => {
        heroButtonNo.style.position = 'absolute';
        heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
        heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
    };
    
    const partner = prompt('🥰 Dime tu nombre 🥰');
    heroTitle.innerHTML += partner + ' ❤';

    heroButtonSi.addEventListener('click', nowSomosNovios);
    heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);