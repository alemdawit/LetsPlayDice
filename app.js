
let scores;

let roundScore;
let activePlayer;
let gamePlaying;
let sixcount;
let winningscore;

winningscore = document.querySelector('.txt-score-limit').value;

init();



document.querySelector('.btn-roll').addEventListener('click', () => {

 if (gamePlaying) {

  // 1. Random number
  const dice = Math.floor(Math.random() * 6) + 1;

  // incriment six dice
  if (dice === 6) {

   sixcount += 1;
   //console.log(sixcount);
  } else {

   sixcount = 0;
  }

  // check for six dice

  if (sixcount === 2) {

   scores[activePlayer] = 0;
   document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

   nextPlayer();

  }


  // 2. Display the result
  const diceDOM = document.querySelector(`#dice-${activePlayer}`);
  diceDOM.style.display = 'block';
  diceDOM.src = `dice-${dice}.png`;

  if (dice !== 1) {
   //ADD score
   roundScore += dice;
   document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
  } else {

   nextPlayer();
  }
 }
})

document.querySelector('.btn-hold').addEventListener('click', () => {
 // Add Current Score to Global Score

 if (gamePlaying) {
  scores[activePlayer] += roundScore;
  //Update the UI
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

  // check if player won the game
  if (scores[activePlayer] >= winningscore) {
   document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
   document.querySelector(`#dice-${activePlayer}`).style.display = 'none';
   document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
   document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
   gamePlaying = false;
  } else {

   nextPlayer();
  }
 }
 // Next Player
 //nextPlayer();
});



document.querySelector('.btn-score-limit').addEventListener('click', () => {


 document.querySelector('.txt-score-limit').value = winningscore = Math.floor(document.querySelector('.txt-score-limit').value);
 init();



})

function nextPlayer() {

 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 roundScore = 0;
 sixcount = 0;
 //Next player
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';

 document.querySelector('.player-1-panel').classList.toggle('active');
 document.querySelector('.player-0-panel').classList.toggle('active');

 document.querySelector('#dice-0').style.display = 'none';
 document.querySelector('#dice-1').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

 gamePlaying = true;
 scores = [0, 0];
 roundScore = 0;
 activePlayer = 0;
 sixcount = 0;




 document.querySelector('#dice-1').style.display = 'none';
 document.querySelector('#dice-0').style.display = 'none';
 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
 document.getElementById('name-0').textContent = 'Player 1';
 document.getElementById('name-1').textContent = 'Player 2';
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
}

