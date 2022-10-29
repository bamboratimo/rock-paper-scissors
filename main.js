function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock"; 
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors"
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw, nobody gets a score";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"; 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    }
}


/*
function game() {
    let myScore = 0;
    let compScore = 0;
    for (let i = 0; myScore <= 2 && compScore <= 2; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        if (playerSelection === null) {
            return;
        }
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            continue;
        }
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("Win")) {
            myScore++;
        } else if (result.includes("Lose")) {
            compScore++;
        }
        console.log("My score: " + myScore + "\n" + "Computer score: " + compScore);
        }
        if (myScore === 3) {
            console.log("You won the game!!!");
        } else if (compScore === 3) {
            console.log("Computer won the game :(");
        }
}
*/

game();