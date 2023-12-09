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

export {generateElement}