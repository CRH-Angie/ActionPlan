function changeContent() {
  // document.getElementById('changeContent').innerHTML = 'This is a demo for changing Content';
  document.getElementById('changeContent').textContent = 'This is a demo for changing text using textContent'
}
function changeImageSrc() {
  // document.getElementById('changeImageSrc').src='images/naruto.jpeg';
  let imgSrc = document.getElementById('changeImageSrc');
  if (imgSrc.getAttribute('src') == 'images/naruto1.jpeg') {
    imgSrc.setAttribute('src', 'images/naruto.jpeg');
  } else imgSrc.setAttribute('src', 'images/naruto1.jpeg');
}
function changeTextColor() {
  document.getElementById('changeTextColor').style.color='pink';
}
function hideText() {
  document.getElementById('hideText').style.display = 'none';
}
function showText() {
  document.getElementById('showText').style.display = 'block'
}
function hideShowText() {
  if(document.getElementById('hideShowText').innerHTML == 'Hide this text') {
    document.getElementById('hideShowText').style.display = 'none';
    document.getElementById('hideShowText').innerHTML = 'This text is finally Shown';
    document.querySelector('#hideShow').textContent = 'Show Text';
  } else {
    document.querySelector('#hideShow').textContent = 'Hide Text';
    document.getElementById('hideShowText').style.display = 'block';
    document.getElementById('hideShowText').innerHTML = 'This text is finally Shown';
    document.getElementById('hideShowText').innerHTML = 'Hide this text';
  }
}
// alert('hello world!');
document.getElementById('button').onclick = function(){
  document.getElementById('confirm').innerHTML = 'Order Placed. Check email for confirmation';
  document.getElementById('button').style.display='none';
}


// javascript: alert(‘hello world’) //run in web console
// REPL (read, evaluate, print, loop) 
// var username = prompt();
// console.log(username)
(function() { 
  //IIFE = Immediately Invoked Function Expression
  //this is a sample of encapsulation
  // not adding the 'var' keyword will make the variable global
  var age = 24;
}());

//this is an easier way of creating IIFE
{ // block; 
  let x = 10;
  let y = 5;
  console.log(x, y)
  { //nested block
    let y = 4;
    console.log(y)
  }

  var z= 100; //using var will still be accessed outside block element {}
}
console.log(window.z)


function sample() {
  x = 1; //automatically go up to scope chain (nested functions) if the variable is not found it will create a variable on the window obj
  var x; //create a variable inside the function, this will not exist outside of function; if created outside function this will go to window obj
  let a; const b=2; // both creates a block level element/scope but const will not let you change value
}

//Datatypes
// Primitive: immutable and cannot be changed (string, undefined, integer, null, boolean)
{
  /*
    Two main categories of data types:
    primitives and objects
  */

  let x = 5; 
  let b = "10";
  x = x + b;
  console.log(x)
}

// Object: can be changed {key:value}
let person = {
  name: 'Angie',
  age: '23',
  favFruit: 'watermelon', 
  createFunction: function() { //this is a function method
    console.log('yey!');
  }
}
console.log(person.age)
person.createFunction();

let now = new Date();
console.log(now)

let grades = [30, 20, 10];
console.log(grades);
console.log(grades[1])

{
  let myName = 'Angie';
  myNewName = myName.toUpperCase();
  console.log(
    'Old name = ',myName,
    'new name = ',myNewName
  )
}