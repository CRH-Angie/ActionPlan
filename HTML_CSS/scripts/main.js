const myHeading = document.querySelector('h1');
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
document.querySelector('html').addEventListener('click', function() {
    alert('stop clicking!');
})