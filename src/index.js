import './style.css';
import homeBackground from './images/homeBackground.jpg';
import {generateHomePage} from './home.js'
import {generateMenuPage} from './menu.js'
import {generateContactPage} from './contact.js'


 function loadPage() {

    generateHomePage();
    // generateMenuPage();
    // generateContactPage();
}

loadPage();