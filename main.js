const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const roundResult = document.querySelector(".roundResult");
const myPoints = document.querySelector(".myPoints");
const compPoints = document.querySelector(".compPoints");
const roundCount = document.querySelector(".roundCount");
const myChoice = document.querySelector(".myChoice");
const compChoice = document.querySelector(".compChoice");
const header = document.querySelector(".header");
const finalResult = document.querySelector(".finalResult");
const buttons = document.querySelector(".buttons");
const myWrapper = document.querySelector(".myWrapper");
const compWrapper = document.querySelector(".compWrapper");
const newGame = document.querySelector(".newGame");

let rounds = 0;
let myScore = 0;
let compScore = 0;

rock.addEventListener("click", game);

paper.addEventListener("click", game);

scissors.addEventListener("click", game);

newGame.addEventListener("click", startNewGame);


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        compWrapper.style.display = "block";
        compChoice.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/904a8656-d025-458b-ab94-7335122cc9b9/dasxgjv-aadf4828-c1a7-4d36-ac3c-6ec4e402cf53.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwNGE4NjU2LWQwMjUtNDU4Yi1hYjk0LTczMzUxMjJjYzliOVwvZGFzeGdqdi1hYWRmNDgyOC1jMWE3LTRkMzYtYWMzYy02ZWM0ZTQwMmNmNTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7qptcRp5A3OEmsIPvPibamZxFihxAWj38OQNnPrpgdg"
        return "rock"; 
    } else if (choice === 1) {
        compWrapper.style.display = "block";
        compChoice.src = "https://cdn.pixabay.com/photo/2017/02/01/12/23/hygiene-2030052_1280.png";
        return "paper";
    } else if (choice === 2) {
        compWrapper.style.display = "block";
        compChoice.src = "https://cdn.pixabay.com/photo/2012/04/01/17/24/scissors-23634_1280.png";
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
    header.style.display = "none";
    playRound(e.target.className, getComputerChoice());
    myWrapper.style.display = "block";
    myChoice.src = e.target.src;
    myPoints.textContent = "My Score: " + myScore;
    compPoints.textContent = "Computer Score: " + compScore;
    rounds++;
    roundCount.textContent = "Rounds: " + rounds;
    if (myScore === 3) {
        finalResult.textContent = "You Won the game!";
        rock.removeEventListener("click", game);
        paper.removeEventListener("click", game);
        scissors.removeEventListener("click", game);
        buttons.style.opacity = "0.5";
    } else if (compScore === 3) {
        finalResult.textContent = "You lost the game :(";
        rock.removeEventListener("click", game);
        paper.removeEventListener("click", game);
        scissors.removeEventListener("click", game);
        buttons.style.opacity = "0.5";
    }
}

function startNewGame() {
    rounds = 0;
    myScore = 0;
    compScore = 0;

    myPoints.textContent = "My Score: " + myScore;
    compPoints.textContent = "Computer Score: " + compScore;
    roundCount.textContent = "Rounds: " + rounds;

    finalResult.textContent = "";

    roundResult.textContent = "";

    buttons.style.opacity = "1";

    myWrapper.style.display = "none";
    compWrapper.style.display = "none";

    header.style.display = "block"

    rock.addEventListener("click", game);
    paper.addEventListener("click", game);
    scissors.addEventListener("click", game);
}
