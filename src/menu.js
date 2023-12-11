import {generateNavBar} from './navbar.js'
import {generateElement} from './generateElement.js';


function generateMenuPage() {
    generateNavBar(true);

    const content = document.getElementById('content');
    const centerDiv = generateElement('div', 'centerDiv', content, undefined);
    generateElement('div', 'discoverHeader', centerDiv, 'Discover');
    generateElement('div', 'foodMenuHeader', centerDiv, 'Our Food Menu');

    const menuItems = [
        {title: 'Grilled Salmon',
         price: '$25',
         ingredients: 'Salmon + Glaze + Veggies + Potatoes'},
        {title: 'Truffle Mushroom Risotto',
        price: '$20',
        ingredients: 'Truffles + Mushrooms + Arborio Rice'},

        {title: 'Creamy Tomato Soup',
        price: '$10',
        ingredients: 'Tomatoes + Herbs + Cream'},
        {title: 'Grilled Chicken Salad',
        price: '$10',
        ingredients: 'Chicken + Rice + Salad + Spinach'},

        {title: 'Chocolate Delight',
        price: '$15',
        ingredients: 'Chocolate + Mousse + Chocolate Ganache'},
        {title: 'Straberry Sponge Cake',
        price: '$17',
        ingredients: 'Strawberries + Sponge Cake + Caramel Glaze'},

        {title: 'Minty Mojito',
        price: '$5',
        ingredients: 'Mint Leaves + Sparkling Water + Lime Juice'},
        {title: 'Water',
        price: '$0',
        ingredients: 'Water'},
    ];

    const menuItemsGrid = generateElement('div', 'menuItemsGrid', centerDiv, undefined);
    generateMenuCard(menuItemsGrid, 'Main Course', menuItems.slice(0, 2));
    generateMenuCard(menuItemsGrid, 'Soups & Salads', menuItems.slice(2, 4));
    generateMenuCard(menuItemsGrid, 'Desserts', menuItems.slice(4, 6));
    generateMenuCard(menuItemsGrid, 'Drinks', menuItems.slice(6, 8));
}

function generateMenuCard(parent, menuTitle, menuItems) {
    const menuCard = generateElement('div', 'menuCard', parent, undefined);
    generateElement('div', 'menuTitle', menuCard, menuTitle);
    generateMenuItem(menuCard, menuItems[0].title, menuItems[0].price, menuItems[0].ingredients);
    generateMenuItem(menuCard,  menuItems[1].title, menuItems[1].price, menuItems[1].ingredients);
}

function generateMenuItem(parent, foodTitle, price, ingredients) {
    const menuItem = generateElement('div', 'menuItem', parent, undefined);
    const itemTitle = generateElement('div', 'itemTitle', menuItem, undefined);
    generateElement('p', undefined, itemTitle, foodTitle);
    generateElement('div', 'underline', itemTitle, undefined);
    generateElement('p', undefined, itemTitle, price);
    generateElement('p', 'ingredients', menuItem, ingredients);
}

export {generateMenuPage}