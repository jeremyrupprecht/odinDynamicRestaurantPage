import './style.css';
import homeBackground from './images/homeBackground.jpg';
import {generateHomePage} from './home.js'
import {generateMenuPage} from './menu.js'
import {generateContactPage} from './contact.js'


 function loadPage(pageType) {
    clearPage();
    switch(pageType) {
        case 'home':
            generateHomePage();
            break;
        case 'menu':
            generateMenuPage();
            break;
        case 'contact':
            generateContactPage();
            break;

    }
    addListeners();
}

function clearPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function addListeners() {
    const homeButton = document.querySelector('.navHome');
    const menuButton = document.querySelector('.navMenu');
    const contactButton = document.querySelector('.navContact');
    homeButton.addEventListener('click', () => {
        loadPage('home');
    });

    menuButton.addEventListener('click', () => {
        loadPage('menu');
    });

    contactButton.addEventListener('click', () => {
        loadPage('contact');
    });
}

// loadPage('contact');

export {loadPage}