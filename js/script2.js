const body = document.querySelector('body');
const main = document.querySelector('main');
const mainHeader = document.querySelector('.main-header');
const navBtn = document.querySelector('.nav-btn');
const navList = document.querySelector('.nav-list');
const galeria = document.querySelector('#galeria');
const kontakt = document.querySelector('#kontakt');
const imgContainers = document.querySelectorAll('.img-container');
const imgExitBtn = document.querySelector('#big-img-exit-btn');

function getRnd(min, max) {
    rndNum = Math.floor((Math.random() * (max - min)) + min);
    return rndNum;
}

imgExitBtn.style.display = 'none';

navBtn.addEventListener('click', () => {
    if (navList.style.display == 'none') {
        navList.style.display = 'flex';
    } else {
    navList.style.display = 'none';
    }
})

if (window.innerWidth > 756) {
    for (let i = 0; i < imgContainers.length; i += 2) {
    rndValue = getRnd(40, 60);
    imgContainers[i].style.width = rndValue + '%';
    imgContainers[i+1].style.width = 100 - rndValue + '%';
    }
}