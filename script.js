function computerPlay(){
    let arr=["Rock", "Paper", "Scissors"]
    let i = Math.floor(Math.random()*arr.length);
    return arr[i]
}

function capitalize(s){
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return "It's a tie!";
        } else if (computerSelection == "Paper") {
            return "You lose. Paper beats rock!";        
        } else {
            return "You win. Rock beats scissors!";
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "You win. Paper beats rock!";
        } else if (computerSelection == "Paper") {
            return "It's a tie!";
        } else {
            return "You lose. Scissors beats paper.";
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return "You lose. Rock beats scissors";
        } else if (computerSelection == "Paper") {
            return "You win. Scissors beats paper!";
        } else {
            return "It's a tie! You both chose scissors!";
        }
    } else {
        return "Please choose either rock, paper, or scissors."
    }
}


function game() {
    playerSelection = this.getAttribute('value');
    computerSelection = computerPlay();
    updateChoicesUI(computerSelection);
    let result = playRound(playerSelection, computerSelection)
    console.log(result);
    if (result.indexOf("win.") > -1) {
        playerScore++;
    } else if (result.indexOf("lose.") > -1) {
        computerScore++;
    }
    updateScoreUI();
    if (playerScore==5 || computerScore == 5 ) {
        displayWinner();
        playerBoard.appendChild(resetButton);
        buttons.forEach(button => button.removeEventListener('click', game));
    }
}

function updateChoicesUI(computerSelection){
    if (computerSelection) {
        computerSelectionDiv.setAttribute("src", `images/${computerSelection.toLowerCase()}.png`);
    } else{
        computerSelectionDiv.setAttribute("src", ``);
    }
}

function updateScoreUI() {
    playerScoreDiv.textContent = playerScore.toString();
    computerScoreDiv.textContent = computerScore.toString();
}

function displayWinner() {
    if (computerScore > playerScore) {
        result.textContent = "The computer won!";
    } else {
        result.textContent = "You won!";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreUI();
    updateChoicesUI('');
    result.textContent = 'Keep playing until a player scores 5 points!';
    playerBoard.removeChild(resetButton);
    buttons.forEach(button => button.addEventListener('click', game));
}


let playerScore = 0;
let computerScore = 0;
const playerBoard = document.querySelector('.player-board');
const computerScoreDiv = document.querySelector('.computer-score');
const playerScoreDiv = document.querySelector('.player-score');
const result = document.querySelector('.result');
const playerSelectionDiv = document.querySelector('.player-selection');
const computerSelectionDiv = document.querySelector('.computer-selection'); 
const resetButton = document.createElement('button')
resetButton.setAttribute("value", "reset");
resetButton.textContent = "Reset";
resetButton.addEventListener('click', resetGame);

const buttons = document.querySelectorAll("input");
let playerSelection;
buttons.forEach(button => button.addEventListener('click', game));



