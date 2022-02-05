function changeContent() {
  document.getElementById('changeContent').innerHTML = 'This is a demo for changing Content';
}
function changeImageSrc() {
  document.getElementById('changeImageSrc').src='images/naruto.jpeg';
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
// function hideShowText() {
//   if(document.getElementById('hideShowText').innerHTML == 'Hide this text') {
//     document.getElementById('hideShowText').style.display = 'none';
//     document.getElementById('hideShowText').innerHTML = 'This text is finally Shown';
//     // document.getElementById('hideShowText')
//   } else {
//     document.getElementById('hideShowText').style.display = 'block';
//     document.getElementById('hideShowText').innerHTML = 'This text is finally Shown';
//     document.getElementById('hideShowText').innerHTML = 'Hide this text';
//   }
// }