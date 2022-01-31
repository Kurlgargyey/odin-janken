//generates a random computer play
function computerPlay () {
 let playIndex = Math.floor(Math.random()*3)
 switch (playIndex) {
  case 0:
   return "Rock";
   break;
  case 1:
   return "Paper";
   break;
  case 2:
   return "Scissors";
   break;
 }
}

//plays a round
function playRound (playerPlay, computerPlay) {
  if (/^rock$/i.test(playerPlay)){
   switch (computerPlay) {
    case "Rock":
     return "It is a tie. The computer played Rock.";
    case "Paper":
     return "You lose. The computer played Paper.";
    case "Scissors":
     return "You win. The computer played Scissors.";
   }
  }
  else if (/^paper$/i.test(playerPlay)){
   switch (computerPlay) {
    case "Rock":
     return "You win. The computer played Rock.";
    case "Paper":
     return "It is a tie. The computer played Paper.";
    case "Scissors":
     return "You lose. The computer played Scissors.";
   }
  }
  else if (/^scissors$/i.test(playerPlay)) {
   switch (computerPlay) {
    case "Rock":
     return "You lose. The computer played Rock.";
    case "Paper":
     return "You win. The computer played Paper.";
    case "Scissors":
     return "It is a tie. The computer played Scissors.";
   }
  }
  else {
   return 'Please enter "rock", "paper" or "scissors".'
  }
}

// plays a round on button click and outputs results
function playButtonRound(e) { 
  outcome = playRound(e.target.id, computerPlay());
    
  if (outcome.match(/tie/)) {
    round++
    scoreboard.firstElementChild.textContent = `Scoreboard: Round ${round}`;
  }
  else if (outcome.match(/win/)) {
    wins++
    playerscore.textContent = `Player: ${wins}`

    round++
    scoreboard.firstElementChild.textContent = `Scoreboard: Round ${round}`;
  }
  else if (outcome.match(/lose/)) {
    losses++
    computerscore.textContent = `Computer: ${losses}`

    round++
    scoreboard.firstElementChild.textContent = `Scoreboard: Round ${round}`;
  } 
    
  const para = document.createElement('p');
  para.classList.add('content');
  para.textContent = outcome;
  results.appendChild(para);

}

function checkGame() {
  if (wins === 5 || losses === 5) {
    gameon = false;
    gameover = document.createElement('p');
    if (wins > losses) {
      gameover.textContent = `Game over! You won!`;
    }else {
      gameover.textContent = `Game over! You lost.`;
    }
    scoreboard.appendChild(gameover);
    scoreboard.appendChild(resetbtn);
  }
}

function resetGame() {
  wins = 0;
  losses = 0;
  round = 0;
  while(results.childElementCount>1){
    results.removeChild(results.lastChild);
  }
  playerscore.textContent = `Player: ${wins}`
  computerscore.textContent = `Computer: ${losses}`
  scoreboard.firstElementChild.textContent = `Scoreboard`;
  scoreboard.removeChild(gameover);
  scoreboard.removeChild(resetbtn);
  gameon = true;
}

resetbtn = document.createElement('button');
resetbtn.textContent = 'Reset game';
resetbtn.addEventListener('click', function(){
  resetGame()
});

const results = document.querySelector('#results');

const playerscore = scores.firstElementChild;
const computerscore = scores.lastElementChild;
let gameon = true;
let round = 0;
let wins = 0;
let losses = 0;

const btns = document.querySelectorAll('.playerinput');
btns.forEach((btn) => {
  btn.addEventListener('click', function(e){
    if (gameon){
      playButtonRound(e)
      checkGame();
    }
  });
});

