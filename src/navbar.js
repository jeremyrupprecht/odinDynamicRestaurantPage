import { generateElement } from "./generateElement";

function generateNavBar(makeMainContainerShort) {

    const content = document.getElementById('content');

    let containerClass = 'mainContainerLong';
    if (makeMainContainerShort) {
        containerClass = 'mainContainerShort';
        content.classList.add('makeContentFullScreenFlexbox');
    }

    const mainContainer = generateElement('div', containerClass, content, undefined);
    const mainLeft = generateElement('div', 'mainLeft', mainContainer, undefined);

    // Fill in the left side of the navbar background
    if (makeMainContainerShort) {
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