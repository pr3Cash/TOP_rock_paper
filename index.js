const playerSelection="rock";
const computerSelection= getComputerChoice();

function getComputerChoice(){
   return "paper";
}

function playRound(playerSelection,computerSelection)
{
   return "You Lose! Paper beats Rock";
} 

function game()
{
   for (let i = 0; i < 5; i++) 
   {
      playRound();
   }
}


console.log(playRound(playerSelection,computerSelection));

