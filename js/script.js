const body = document.querySelector('body');
const main = document.querySelector('main');
const mainHeader = document.querySelector('.main-header');
const navBtn = document.querySelector('.nav-btn');
const navList = document.querySelector('.nav-list');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
const jumboList = document.querySelectorAll('.jumbotron');
const parallax = document.querySelectorAll('.parallax');
const footer = document.querySelector('footer');
const oNas = document.querySelector('#o-nas');
const oferta = document.querySelector('#oferta');
const cards = document.querySelectorAll('.card');
const galeria = document.querySelector('#galeria');
const kontakt = document.querySelector('#kontakt');
const imgContainers = document.querySelectorAll('.img-container');
const imgExitBtn = document.querySelector('#big-img-exit-btn');
const iframe = document.querySelector('iframe');

console.log(iframe);
iframe.width = 100;


function getRnd(min, max) {
    rndNum = Math.floor((Math.random() * (max - min)) + min);
    return rndNum;
}

let jumboCounter = 0;
jumboList[jumboCounter].style.display = 'flex';
jumboList[jumboCounter+1].style.display = 'none';


navBtn.addEventListener('click', () => {
    if (navList.style.display == 'none') {
        navList.style.display = 'flex';
    } else {
    navList.style.display = 'none';
    }
})

arrowLeft.addEventListener('click', () => {
    if (jumboCounter > 0) {
    jumboList[jumboCounter].style.display = 'none';
    jumboCounter -= 1;
    jumboList[jumboCounter].style.display = 'flex';
    }
})

arrowRight.addEventListener('click', () => {
    if (jumboCounter < jumboList.length - 1) {
    jumboList[jumboCounter].style.display = 'none';
    jumboCounter += 1;
    jumboList[jumboCounter].style.display = 'flex';
    }
})

for (let i = 0; i < parallax.length; i += 1) {
    parallax[i].style.width = footer.clientWidth + 'px';
    parallax[i].style.marginLeft = Math.floor((((footer.clientWidth - 756) / 2) * -1)) + 'px';
    window.onresize = () => {  
    parallax[i].style.width = footer.clientWidth + 'px';
    parallax[i].style.marginLeft = Math.floor((((footer.clientWidth - main.clientWidth) / 2) * -1)) + 'px';
    }
}

window.addEventListener('resize', () => {
    for (let i = 0; i < parallax.length; i += 1) {
        parallax[i].style.width = footer.clientWidth + 'px';
        parallax[i].style.marginLeft = Math.floor((((footer.clientWidth - 756) / 2) * -1)) + 'px';
        window.onresize = () => {  
        parallax[i].style.width = footer.clientWidth + 'px';
        parallax[i].style.marginLeft = Math.floor((((footer.clientWidth - main.clientWidth) / 2) * -1)) + 'px';
        }
    }
});

if(window.innerWidth < 468) {
    oNas.style.opacity = 0;
    oferta.style.opacity = 0;
    for (let i = 0; i < cards.length; i += 1) {
        cards[i].style.opacity = 0;
    }
    galeria.style.opacity = 0;
    kontakt.style.opacity = 0;
}


function fadeIn(element, pageoffset) {
    if (element.style.opacity == 0 && window.pageYOffset > pageoffset) {
        var interval = setInterval(() => {
            element.style.opacity = parseFloat(element.style.opacity) + 0.008;
            if (element.style.opacity >= 1) {
                clearInterval(interval);
            }
        }, 20)
    }
}


window.addEventListener('scroll', () => {
    if(window.innerWidth >= 768) {
        fadeIn(oNas, -100);
        fadeIn(oferta, 1100)
        for (i = 0; i < cards.length; i += 1) {
            fadeIn(cards[i], i * 250 + 1200)
        }
        fadeIn(galeria, 5400)
        fadeIn(kontakt, 6200)
    }
})

if (window.innerWidth > 756) {
    for (let i = 0; i < imgContainers.length; i += 2) {
    rndValue = getRnd(40, 60);
    imgContainers[i].style.width = rndValue + '%';
    imgContainers[i+1].style.width = 100 - rndValue + '%';
    }
}