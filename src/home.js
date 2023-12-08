import homeBackground from './images/homeBackground.jpg';

function generateHomePage() {
    const content = document.getElementById('content');

    const mainContainer = generateElement('div', 'mainContainer', content, undefined);
    const mainLeft = generateElement('div', 'mainLeft', mainContainer, undefined);
    const homeMainCaption = generateElement('div', 'homeMainCaption', mainLeft, undefined);
    generateElement('p', undefined, homeMainCaption, 'Discover your taste');
    generateElement('h1', undefined, homeMainCaption, 'Eat healthy and Natural Food');
    const menuButtonMain = generateElement('button', 'menu', homeMainCaption, undefined);
    generateElement('p', undefined, menuButtonMain, 'Discover Menu');

    const mainRight = generateElement('div', 'mainRight', mainContainer, undefined);
    const navBar = generateElement('div', 'navbar', mainRight , undefined);

    const navHome = generateElement('div', 'navHome underlineEffect', navBar, undefined);
    const homeButton = generateElement('button', undefined, navHome, undefined);
    generateElement('h2', undefined, homeButton, 'Home');

    const navMenu = generateElement('div', 'navMenu underlineEffect', navBar, undefined);
    const menuButton = generateElement('button', undefined, navMenu, undefined);
    generateElement('h2', undefined, menuButton, 'Menu');

    const navContact = generateElement('div', 'navContact underlineEffect', navBar, undefined);
    const contactButton = generateElement('button', undefined, navContact, undefined);
    generateElement('h2', undefined, contactButton, 'Contact');

    const homeBackgroundImg = new Image();
    homeBackgroundImg.src = homeBackground;
    homeBackgroundImg.classList.add('mainRightImg');
    mainRight.appendChild(homeBackgroundImg);
}

function generateElement(type, className, parent, innerText) {
    const element = document.createElement(type);
    if (className) {
        const classes = className.split(" ");
        for (let i = 0; i < classes.length; i++) {
            element.classList.add(classes[i]);
        }
    }
    if (innerText) {
        element.innerHTML = innerText;
    }
    parent.appendChild(element);
    return element
}

export {generateHomePage}