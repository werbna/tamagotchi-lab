/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0
}
let timer;

let gameOver;

/*------------------------ Cached Element References ------------------------*/
boredomStatEl = document.getElementById('boredom-stat');
hungerStatEl = document.getElementById('hunger-stat');
sleepinessStatEl = document.getElementById('sleepiness-stat');

playBtnEl = document.getElementById('play');
feedBtnEl = document.getElementById('feed');
sleepBtnEl = document.getElementById('sleep');
gameMessageEl = document.getElementById('message');
resetBtnEl = document.getElementById('restart');

console.log(boredomStatEl);
console.log(hungerStatEl);
console.log(sleepinessStatEl);
console.log(playBtnEl);
console.log(feedBtnEl);
console.log(sleepBtnEl);
console.log(gameMessageEl);
console.log(resetBtnEl);

/*-------------------------------- Functions --------------------------------*/
function init() {
  resetBtnEl.classList.add('hidden');
  gameMessageEl.classList.add('hidden');
  console.log('Init Function invoked');
  gameOver = false;
  timer = setInterval(runGame, 2000);
  render();
}

function runGame() {
  console.log('the game is running!')
  updateStates();
  checkGameOver();
  render();

}

function render() {
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepinessStatEl.textContent = state.sleepiness;

  if (gameOver) {
    clearInterval(timer);
    gameMessageEl.textContent = 'Game Over!';
    resetBtnEl.classList.remove('hidden');
    gameMessageEl.classList.remove('hidden');
  }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function updateStates() {
  state.boredom += getRandomInt(4);
  state.hunger += getRandomInt(4);
  state.sleepiness += getRandomInt(4);
}

function checkGameOver() {
  if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
      gameOver = true;
  }
}

function playBtnClick() {
  state.boredom = 0;
  render();
}
function feedBtnClick() {
  state.hunger = 0;
  render();
}
function sleepBtnClick() {
  state.sleepiness = 0;
  render();
}

init();
/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click',playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);
resetBtnEl.addEventListener('click', init);
