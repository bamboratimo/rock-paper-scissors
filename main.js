const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const roundResult = document.querySelector(".roundResult");
const myPoints = document.querySelector(".myPoints");
const compPoints = document.querySelector(".compPoints");

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
    if (playerSelection === computerSelection) {
        roundResult.textContent = "It's a draw, nobody gets a score";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        myScore++;
        roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        myScore++;
        roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection; 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++;
        roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        myScore++;
        roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    }
}



function game(e) {
        playRound(e.target.className, getComputerChoice());
        myPoints.textContent = "My Score: " + myScore;
        compPoints.textContent = "Computer Score " + compScore;
        
        console.log("My score: " + myScore + "\n" + "Computer score: " + compScore);
        if (myScore === 3) {
            console.log("You won the game!!!");
        } else if (compScore === 3) {
            console.log("Computer won the game :(");
        }
    }
