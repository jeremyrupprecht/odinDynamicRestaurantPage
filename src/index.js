import './style.css';
import homeBackground from './images/homeBackground.jpg';

 function generatePage() {
    
    // Test CSS
    // const element = document.createElement('div');
    // element.innerHTML = "Testing Styles..."
    // element.classList.add('hello');
    
    // Test assets
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    const mainRightSide = document.querySelector('.mainRight');
    const homeBackgroundImg = new Image();
    homeBackgroundImg.src = homeBackground;
    homeBackgroundImg.classList.add('mainRightImg');
    mainRightSide.appendChild(homeBackgroundImg);


    // return element;
}

// document.body.appendChild(testComponent());
generatePage();