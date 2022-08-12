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

// var username = prompt();
// console.log(username)