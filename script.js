'use strict';
const s1 = document.querySelector('#score--1');
//'#' to select ID;
//'.' to select class;   OR
const s0 = document.getElementById('score--0');
const c0 = document.getElementById('current--0');
const c1 = document.getElementById('current--1');
const d = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const reset = document.querySelector('.btn--new ');
const hold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const Switchplayer = function () {
  x = 0;
  document.getElementById(`current--${p}`).textContent = x;
  p = 1 - p;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
let x = 0;
let p = 0;
let playing = true;
const score = [0, 0];
const init = function () {
  s0.textContent = 0;
  s1.textContent = 0;
  d.classList.add('hidden');
  c0.textContent = 0;
  c1.textContent = 0;
  document.querySelector(`.player--${p}`).classList.remove('player--winner');
  p = 0;
  document.querySelector(`.player--${p}`).classList.add('player--active');
};
init();
roll.addEventListener('click', function () {
  const a = Math.trunc(Math.random() * 6 + 1);
  d.classList.remove('hidden');
  d.src = `dice-${a}.png`;
  console.log(a);
  if (a === 1) {
    Switchplayer();
  } else {
    x = x + a;
    document.getElementById(`current--${p}`).textContent = x;
  }
});
hold.addEventListener('click', function () {
  score[p] = score[p] + x;
  document.getElementById(`score--${p}`).textContent = score[p];
  if (score[p] >= 100) {
    playing = false;
    d.classList.add('hidden');
    document.querySelector(`.player--${p}`).classList.add('player--winner');
    document.querySelector(`.player--${p}`).classList.remove('player--active');
  }
  Switchplayer();
});
//reset.addEventListener('click', init);
