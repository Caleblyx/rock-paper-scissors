function computerPlay(){
    let arr=["Rock", "Paper", "Scissors"]
    let i = Math.floor(Math.random()*arr.length);
    return arr[i]
}

function capitalize(s){
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

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
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please choose either rock, paper, or scissors.");
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection)
        console.log(result);
        if (result.indexOf("win.") > -1) {
            playerScore++;
        } else if (result.indexOf("lose.") > -1) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You won!");
    } else if (playerScore < computerScore) {
        console.log("You loss!");
    } else {
        console.log("It's a tie!");
    }


}