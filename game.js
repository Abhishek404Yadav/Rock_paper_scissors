const userScore = 0;
const computerScore = 0;
// !DOM cache variables
const roundInfo_ui = document.getElementById("roundInfo");
const roundResult_ui = document.getElementById("roundResult");
const userSign_ui = document.getElementById("userSign");
const computerSign_ui = document.getElementById("computerSign");
const userScore_ui = document.getElementById("userScore");
const computerScore_ui = document.getElementById("computerScore");

const userChoiceArr = Array.from(document.querySelectorAll("[data-choice]"));

//-----This event is run when we click any button----
for (const element of userChoiceArr) {
  element.addEventListener("click", () => {
    const selectedChoice = element.dataset.choice;
    game(selectedChoice);
  });
}
//!-------End here--------

//------This game function call playRound function-----
function game(userSelection) {
  const computerChoice = getComputerChoice();
  console.log(playRound(userSelection, computerChoice));
}
//!-------End here--------

//------This is computer Choice function-----
const getComputerChoice = () => {
  let randomNo = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNo) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
};
//!-------End here--------

// --------This is playRound Function---------

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a tie";
  } //Both select the Same choice

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You Lost!";
    } else {
      return "You Won!";
    }
  } // ?end userchoice is rock

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You Lost!";
    } else {
      return "You Won!";
    }
  } // ?end userchoice is paper

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You Lost!";
    } else {
      return "You Won!";
    }
  } // ?end userchoice is scissors
}
//!-------End here--------
