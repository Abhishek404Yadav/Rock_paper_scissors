let userScore = 0;
let computerScore = 0;
// !DOM cache variables
const roundInfo_ui = document.getElementById("roundInfo");
const roundResult_ui = document.getElementById("roundResult");
const userSign_ui = document.getElementById("userSign");
const computerSign_ui = document.getElementById("computerSign");
const userScore_ui = document.getElementById("userScore");
const computerScore_ui = document.getElementById("computerScore");

const userChoiceArr = Array.from(document.querySelectorAll("[data-choice]"));

//-----This event is run  when we click any button and give user choice----
for (const element of userChoiceArr) {
  element.addEventListener("click", () => {
    const selectedChoice = element.dataset.choice;
    console.log(`user ${selectedChoice}`);
    game(selectedChoice);
  });
}
//!-------End here--------

//------This is computer Choice function-----
const getComputerChoice = () => {
  let randomNo = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNo) {
    case 0:
      computerChoice = "Rock";
      console.log(computerChoice);
      break;
    case 1:
      computerChoice = "Paper";
      console.log(computerChoice);
      break;
    case 2:
      computerChoice = "Scissors";
      console.log(computerChoice);
      break;
  }
  return computerChoice;
};
//!-------End here--------

// --------This is playRound comparison Function---------
function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    draw(userChoice, computerChoice);
  } //!Both select the Same choice
  else {
    if (userChoice === "Rock") {
      if (computerChoice === "Paper") {
        lost(userChoice, computerChoice);
      } else {
        win(userChoice, computerChoice);
      }
    } // ?end userchoice is rock

    if (userChoice === "Paper") {
      if (computerChoice === "Scissors") {
        lost(userChoice, computerChoice);
      } else {
        win(userChoice, computerChoice);
      }
    } // ?end userchoice is paper

    if (userChoice === "Scissors") {
      if (computerChoice === "Rock") {
        lost(userChoice, computerChoice);
      } else {
        win(userChoice, computerChoice);
      }
    } // ?end userchoice is scissors
  }
}
//!-------End here--------

//------This game function call playRound function-----
function game(userSelection) {
  let computerChoice = getComputerChoice();
  playRound(userSelection, computerChoice);
  updateSign(userSelection, computerChoice);
}
//!-------End here--------

// ?------------------------------UI Design------------------------------------------

//-----------Function Of WIN Loose and Draw-------------- 
function win(userChoice, computerChoice) {
  userScore++;
  userScore_ui.textContent = `Player:${userScore}`; //we can also use inner HTML but it is unsafe
  computerScore_ui.textContent = `Computer:${computerScore}`;
  roundInfo_ui.textContent = "You Win! 🔥";
  roundResult_ui.textContent = `${userChoice} Beats ${computerChoice} !`;
  userSign_ui.classList.add("opacity");
  computerSign_ui.classList.remove("opacity");
  if(userScore==5||computerScore==5){
    restartGame();
  }
}
function lost(userChoice, computerChoice) {
  computerScore++;
  userScore_ui.textContent = `Player:${userScore}`;
  computerScore_ui.textContent = `Computer:${computerScore}`;
  roundInfo_ui.textContent = "You Lost! 😢";
  roundResult_ui.textContent = `${userChoice} is Beaten by ${computerChoice} !`;
  computerSign_ui.classList.add("opacity");
  userSign_ui.classList.remove("opacity");
  if(userScore==5||computerScore==5){
    restartGame();
  }
}
function draw(userChoice, computerChoice) {
  userSign_ui.classList.remove("opacity");
  computerSign_ui.classList.remove("opacity");
  roundInfo_ui.textContent = "It's a Tie! 😑";
  roundResult_ui.textContent = `${userChoice} Ties with ${computerChoice} !`;
}
// !-------End her---------
//-----------Function for updating Signs-------------- 
function updateSign(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "Rock":
      userSign_ui.textContent = "✊";
      break;
    case "Paper":
      userSign_ui.textContent = "✋";
      break;
    case "Scissors":
      userSign_ui.textContent = "✌";
      break;
  }
  switch (computerChoice) {
    case "Rock":
      computerSign_ui.textContent = "✊";
      break;
    case "Paper":
      computerSign_ui.textContent = "✋";
      break;
    case "Scissors":
      computerSign_ui.textContent = "✌";
      break;
  }
}

// EndGame Modal Testing

function restartGame() {
  userScore = 0
  computerScore = 0
  roundInfo_ui.textContent = 'Choose your weapon'
  roundResult_ui.textContent = 'First to score 5 points wins the game'
  userScore_ui.textContent = 'Player: 0'
  computerScore_ui.textContent = 'Computer: 0'
  userSign_ui.textContent = '❔'
  computerSign_ui.textContent = '❔'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}
// restartBtn.addEventListener('click', restartGame)
// overlay.addEventListener('click', closeEndgameModal)