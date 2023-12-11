import contactBackground from './images/contactBackground.jpg';
import rightArrowImg from './images/rightArrow.svg';
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

    // Footer section

    const footerContainer = generateElement('div', 'footerContainer', content, undefined);
    const theRestaurantH1 = generateElement('h1', undefined, footerContainer, undefined);
    generateElement('span', 'orangeSpan', theRestaurantH1, 'The ');
    theRestaurantH1.innerHTML += 'Restaurant';

    const footerAcross = generateElement('div', 'footerAcross', footerContainer, undefined);
    
    const footerItem1 = generateElement('div', 'footerItem aboutUs', footerAcross, undefined);
    generateElement('p', undefined, footerItem1, 'About Us');
    generateElement('p', undefined, footerItem1, `Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quos architecto ad deserunt id, nisi possimus animi impedit 
    perferendis.`); 

    const footerItem2 = generateElement('div', 'footerItem aboutUs', footerAcross, undefined);
    generateElement('p', undefined, footerItem2, 'Get News & Offers');
    const emailInputForm = generateElement('form', undefined, footerItem2, undefined);
    generateInput('email', 'enterEmailNews&Offers', true, footerItem2,'Enter your email', undefined, undefined);
    const submitEmailButton = generateElement('button',  undefined, emailInputForm, undefined);
    submitEmailButton.setAttribute('type', 'submit');

    const rightArrowImgElement = new Image();
    rightArrowImgElement.src = rightArrowImg;
    rightArrowImgElement.classList.add('rightArrowImg');
    submitEmailButton.appendChild(rightArrowImgElement);

    const footerItem3 = generateElement('div', 'footerItem', footerAcross, undefined);
    generateElement('p', undefined, footerItem3, 'Contact Us');
    const contactUsGrid = generateElement('div', 'contactUsGrid', footerItem3, undefined);
    generateElement('p', undefined, contactUsGrid, 'Call Us (403) 000-0000');
    generateElement('p', undefined, contactUsGrid, '138 Lorem Ipsum Way NW');
    generateElement('p', undefined, contactUsGrid, 'Ipsum, Lorem T1A 1A1');
    generateElement('p', undefined, contactUsGrid, 'Lorem@Ipsum@gmail.com');
    generateElement('p', undefined, contactUsGrid, 'Monday-Wednesday-Sunday');
    generateElement('p', undefined, contactUsGrid, '8:00AM - 10:30PM');
    generateElement('p', undefined, contactUsGrid, '8:00AM - 10:30PM');
    generateElement('p', undefined, contactUsGrid, '8:00AM - 10:30PM');
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