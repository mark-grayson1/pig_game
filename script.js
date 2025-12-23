let scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;
let playing = true;

const score1El = document.querySelector("#score--1"); 
const score2El = document.querySelector("#score--2");
const current1El = document.querySelector("#current--1");
const current2El = document.querySelector("#current--2");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player1El = document.querySelector(".player--1");
const player2El = document.querySelector(".player--2");
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.style.display = "none";
console.log("Initialised variables");
btnRoll.addEventListener("click", ()=> {
  if (true/*playing*/) {
    console.log("roll button pressed");
    const dice= Math.floor(Math.random() * 6) + 1;
    diceEl.style.display = "block";
    diceEl.src = `/chapter_6/images/dice-${dice}.png`;
    console.log(`Player ${activePlayer} rolled:
      ${dice}`);
    if(dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
      }
  }
});

function switchPlayer () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  player1El.classList.toggle("player--active");
  player2El.classList.toggle("player--active");
  console.log(`Switch to Player ${activePlayer}`);
};