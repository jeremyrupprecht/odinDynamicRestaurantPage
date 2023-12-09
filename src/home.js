import homeBackground from './images/homeBackground.jpg';
import {generateElement} from './generateElement.js';
import { generateNavBar } from './navbar';
import {loadPage} from './index.js'

function generateHomePage() {

    generateNavBar(false);

    const mainLeft = document.querySelector(".mainLeft");
    const homeMainCaption = generateElement('div', 'homeMainCaption', mainLeft, undefined);
    generateElement('p', undefined, homeMainCaption, 'Discover your taste');
    generateElement('h1', undefined, homeMainCaption, 'Eat healthy and Natural Food');
    const menuButtonMain = generateElement('button', 'menu', homeMainCaption, undefined);
    generateElement('p', undefined, menuButtonMain, 'Discover Menu');
    const mainRight = document.querySelector(".mainRight");

    const homeBackgroundImg = new Image();
    homeBackgroundImg.src = homeBackground;
    homeBackgroundImg.classList.add('mainRightImg');
    mainRight.appendChild(homeBackgroundImg);

    menuButtonMain.addEventListener('click', () => {
        loadPage('menu');
    });
}

export {generateHomePage}