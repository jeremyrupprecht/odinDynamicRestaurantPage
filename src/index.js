import './style.css';
import Icon from './testIcon.png';

 function testComponent() {
    
    // Test CSS
    const element = document.createElement('div');
    element.innerHTML = "Testing Styles..."
    element.classList.add('hello');
    
    // Test assets
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
 }

document.body.appendChild(testComponent());
console.log("testing...");