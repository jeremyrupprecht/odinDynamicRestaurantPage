import './style.css';

 function testComponent() {
    const element = document.createElement('div');
    element.innerHTML = "Testing Styles..."
    element.classList.add('hello');
    return element;
 }

document.body.appendChild(testComponent());
console.log("testing...");