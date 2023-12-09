import { generateElement } from "./generateElement";

function generateNavBar(menuOrContactPageActive) {

    const content = document.getElementById('content');

    let containerClass = 'mainContainer';
    if (menuOrContactPageActive) {
        containerClass = 'mainContainerMenuOrContactPage';
        content.classList.add('menuPageActive');
    }

    const mainContainer = generateElement('div', containerClass, content, undefined);
    const mainLeft = generateElement('div', 'mainLeft', mainContainer, undefined);

    if (menuOrContactPageActive) {
        generateElement('div', 'navbarLeft', mainLeft, undefined);
    }

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
}

export {generateNavBar}