'use strict';

let list = document.querySelector('.list');
let modal = document.querySelector('.modal');
let modalImage = document.querySelector('.modal-image');

for (let i = 1; i <= 20; i++) {
  let li = document.createElement(`li`);
  li.innerHTML = `
    <div class="list-item list${i}">
        <span class="number">${i}</span>
        <div class="image">
            <img src="images/${i}.jpeg" alt="" />
        </div>
    </div>
    `;
  list.appendChild(li);
}

let listItem = document.querySelectorAll('.list-item');
let btnShowAnswer = document.querySelector('.show-answer');
let btnCloseModal = document.querySelector('.close-modal');

// const openModal = i => {
//   console.log(i);
//   modal.classList.remove('hidden');
//   btnShowAnswer.addEventListener('click', showAnswer);
//   btnCloseModal.addEventListener('click', closeModal);
// };
// const closeModal = () => {
//   modalImage.src = `images/question.webp`;
//   modal.classList.add('hidden');
// };
// const showAnswer = () => {
//   modalImage.src = `images/${i}.jpeg`;
//   list.classList.add('selected');

//   document.querySelector(`.list${count}`);

//   //   document.querySelector(`.list${i}`).classList.add('selected');
//   //   e.target.classList.add('selected');
// };

// for (let i = 0; i <= listItem.length; i++) {
//   listItem[i].addEventListener('click', openModal(i));
// }

let count;

listItem.forEach((list, i) => {
  list.addEventListener('click', function (e) {
    count = i + 1;
    modal.classList.remove('hidden');
    // const path = e.path[0].classList[1];
    console.log(e.target);

    btnShowAnswer.addEventListener('click', function () {
      // console.log(path);

      modalImage.src = `images/${count}.jpeg`;
      list.classList.add('selected');

      // document.querySelector(`.list${count}`);
      //   document.querySelector(`.list${i}`).classList.add('selected');
      //   e.target.classList.add('selected');
    });
    btnCloseModal.addEventListener('click', function () {
      modalImage.src = `images/question.webp`;
      modal.classList.add('hidden');
    });
  });
});

console.log(count);
let score = [0, 0];
let team1 = document.querySelector('.team1');
let team1Score = document.querySelector('.team1 span');
let team2 = document.querySelector('.team2');
let team2Score = document.querySelector('.team2 span');
let team1Out = document.querySelector('.team1Out');
let team1OutScore = document.querySelector('.team1Out span');
let team2Out = document.querySelector('.team2Out');
let team2OutScore = document.querySelector('.team2Out span');

team1.addEventListener('click', function () {
  score[0] += 100;
  team1Score.textContent = score[0];
  team1OutScore.textContent = score[0];
});

team2.addEventListener('click', function () {
  score[1] += 100;
  team2Score.textContent = score[1];
  team2OutScore.textContent = score[1];
});
