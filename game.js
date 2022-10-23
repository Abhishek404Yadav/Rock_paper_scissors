const getUserChoice = (userInput)=> {
   let userChoice=userInput.toLowerCase();
    if(userChoice === 'rock'||'paper'||'scissors'){
        console.log(`You choose ${userChoice}`);
        return userChoice;
    }
    else{
        console.log('Invalid Selection');
    }
};
// ------------------------------------------
const getComputerChoice =  ()=> {
    let randomNo = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
    switch (randomNo) {
        case 1:
            computerChoice ="rock";
      break;
    case 2:
        computerChoice= "paper";
        break;
        case 3:
            computerChoice = "scissors";
            break;
  }
  console.log(`computer choose ${computerChoice}`);
  return computerChoice;
};

// ------------------------------------------

const playRound =(userChoice,computerChoice)=>{
    
    if (userChoice === computerChoice) {
        return 'The game is a tie';
      }//Both select the Same choice
    
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'You Lost!';
        } else {
          return "You Won!"
        }
      } // end userchoice is rock

    
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'You Lost!';
        } else {
          return 'You won!';
        }
      } // end userchoice is paper
    
    
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'You Lost!';
        } else {
          return 'You Won!';
        }
      } //end userchoice is scissors
    
};

function game(){
    let userInput=prompt("Enter your choice" );
    let result=playRound(getUserChoice(userInput),getComputerChoice());
    console.log(result);
    return result;
}

let Pc=0;
let human=0;
let i=1;
while(i<=5){
   let result= game();
    if("You Won!"===result){
        human= human+1;
        console.log(`------Human ${human}------Computer ${Pc}-------`);
        i++;
    }
    else if("You Lost!"===result){
        Pc=Pc+1;
        console.log(`------Human ${human}------Computer ${Pc}-------`);
        i++;
    }
}
(human>Pc) ? console.log(`Human ${human} Computer ${Pc}----human wins all the game`)
:console.log(`Computer ${Pc} Human ${human}----Computer wins all the game`);
