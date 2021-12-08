const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
   if (userInput === 'rock ' || userInput === 'paper' || userInput === 'scissors') {
     return userInput
   } else {
     console.log('Error!');
   }
};

function getComputerChoice(){
  switch(Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return'paper';
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is a tie';
  } if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'You Won!'
    }
  }

if (userChoice === 'scissors') {
  if(computerChoice === 'rock')
  return 'Cmputer Won!';
} else {
  return 'You Won!';
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer Won!'
  } else {
    return 'You Won!';
  }
}
}
console.log(determineWinner('paper','scissors'));
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
