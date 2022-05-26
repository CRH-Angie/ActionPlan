/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let cake = 'chocolate';
if (cake = 'chocolate') {
    console.log('I love Chocolate cake');
} else console.log('What flavor is the cake?');

function multiply(num1, num2) {
    let product = num1 * num2;
    return product;
}
function addition(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
function newText(txt) {
    return txt;
}
document.querySelector('html').addEventListener('click', () => {
    alert('stop clicking!');
});
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let imgSrc = myImage.getAttribute('src');
    if(imgSrc === 'images/lorem-ipsum.jpeg') {
        myImage.setAttribute('src', 'images/lorem-ipsum2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/lorem-ipsum.jpeg');
    }
}

let btn = document.querySelector('button');
let heading = document.querySelector('h1');

function setUserName() {
    let username = prompt('Please enter your name...');
    localStorage.setItem('name', username);
    heading.textContent = 'Hello '+username;

    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        heading.textContent = 'Hello '+username;
    }
}
btn.onclick = ()=> {
    setUserName();
}