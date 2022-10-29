const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const roundResult = document.querySelector(".roundResult");
const myPoints = document.querySelector(".myPoints");
const compPoints = document.querySelector(".compPoints");
const roundCount = document.querySelector(".roundCount");

let rounds = 0;
let myScore = 0;
let compScore = 0;

rock.addEventListener("click", game);

paper.addEventListener("click", game);

scissors.addEventListener("click", game);


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock"; 
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors"
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        roundResult.textContent = "It's a draw, nobody gets a score";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        myScore++;
        roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        compScore++;
        roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        myScore++;
        roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        compScore++;
        roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection; 
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        compScore++;
        roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        myScore++;
        roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    }
}



function game(e) {
        playRound(e.target.className, getComputerChoice());
        myPoints.textContent = "My Score: " + myScore;
        compPoints.textContent = "Computer Score: " + compScore;
        rounds++;
        roundCount.textContent = "Rounds: " + rounds;
        
        console.log("My score: " + myScore + "\n" + "Computer score: " + compScore);
        if (myScore === 3) {
            console.log("You won the game!!!");
        } else if (compScore === 3) {
            console.log("Computer won the game :(");
        }
    }
