import contactBackground from './images/contactBackground.jpg';
import { generateNavBar } from "./navbar";
import { generateElement } from './generateElement';

function generateContactPage() {
    generateNavBar(true);
    
    const content = document.getElementById('content');

    const menuBackgroundImg = new Image();
    menuBackgroundImg.src = contactBackground;
    menuBackgroundImg.classList.add('contactBackground');
    content.appendChild(menuBackgroundImg);

    const centerdiv = generateElement('div', 'centerDiv', content, undefined);
    const form = generateElement('form', 'form', centerdiv, undefined);
    generateElement('p', 'letsP', form, 'Lets');
    generateElement('h1', 'bookH1', form, 'Book a table');

    const inputsGrid = generateElement('div', 'inputsGrid', form, undefined);
    generateLabel('pickDate', undefined, inputsGrid, 'Date *');
    generateLabel('pickTime', undefined, inputsGrid, 'Time *');
    generateLabel('pickGuests', undefined, inputsGrid, 'Guests *');

    generateInput('month', 'pickDate', true, inputsGrid, undefined, undefined, undefined);
    generateInput('time', 'pickTime', true, inputsGrid, undefined, undefined, undefined);
    generateInput('number', 'pickGuests', true, inputsGrid, '0', '0', '10');
    generateInput('email', 'enterEmail', true, inputsGrid, 'Email *', undefined, undefined);
    const submitButton = generateElement('button', undefined, inputsGrid, 'Check Availability');
    submitButton.setAttribute('type', 'submit');

}

function generateLabel(forLinkName, className, parent, text) {
    const element = generateElement('label', className, parent, text);
    element.setAttribute('for', forLinkName);
    return element
}

function generateInput(type, idLinkName, required, parent, placeholder, min, max) {
    const element = generateElement('input', undefined, parent, undefined);
    element.setAttribute('type', type);
    element.setAttribute('id', idLinkName);

    if (required) {
        element.setAttribute('required', true);
    }

    if (min && max) {
        element.setAttribute('min', min);
        element.setAttribute('max', max);
    }

    if (placeholder) {
        element.setAttribute('placeholder', placeholder);
    }

}

export {generateContactPage}