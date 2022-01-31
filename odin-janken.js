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

function game () {
 let wins = 0;
 let losses = 0;
 let round = 0;

 while (round < 5) {
  let playerSelection = window.prompt("What's your move?", computerPlay());
  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  console.log(result)
  if (result.match(/tie/)) {
   round++
  }
  else if (result.match(/win/)) {
   wins++
   round++
  }
  else if (result.match(/lose/)) {
   losses++
   round++
  }
 }
 if (wins > losses) {
  console.log(`Rounds won: ${wins}. Rounds lost:${losses}. You win!`)
 }
 else if (wins < losses) {
  console.log(`Rounds won: ${wins}. Rounds lost:${losses}. You lose.`)
 }
 else if (wins === losses) {
  console.log(`Rounds won: ${wins}. Rounds lost:${losses}. It is a tie.`)
 }
}

const results = document.querySelector('#results');

const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
  btn.addEventListener('click', function(e){
    const para = document.createElement('p');
    para.classList.add('content');
    para.textContent = playRound(e.target.id, computerPlay());
    
    results.appendChild(para);
  });
});