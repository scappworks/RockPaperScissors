let bodyContainer = document.querySelector("#body-container");
let buttons = bodyContainer.querySelectorAll("button");
let resultsDiv = bodyContainer.querySelector("#results-div");
let resultsDivChildren = resultsDiv.getElementsByClassName("results-children");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.id.substring(0, button.id.indexOf("-"));
        let computerChoice = computerPlay();
        let results = playRound(playerChoice, computerChoice);

        resultsDivChildren[1].innerHTML = results;
    });
});

function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let min = 0;
    let max = 3;
    let choice = Math.floor(Math.random() * (max - min) + min);

    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    let psLowerCase = playerSelection.toLowerCase();
    let csLowerCase = computerSelection.toLowerCase();

    if (psLowerCase === "rock") {
        if (csLowerCase === "paper") {
            return "You lose! Paper beats Rock";
        }

        else if (csLowerCase === "scissors") {
            return "You win! Rock beats Scissors";
        }

        else {
            return "It's a tie!";
        }
    }

    if (psLowerCase === "paper") {
        if (csLowerCase === "scissors") {
            return "You lose! Scissors beats Paper";
        }

        else if (csLowerCase === "rock") {
            return "You win! Paper beats Rock";
        }

        else {
            return "It's a tie!";
        }
    }

    if (psLowerCase === "scissors") {
        if (csLowerCase === "rock") {
            return "You lose! Rock beats Scissors";
        }

        else if (csLowerCase === "paper") {
            return "You win! Scissors beats Paper";
        }

        else {
            return "It's a tie!";
        }
    }
}
/*
    function game() {
        let roundsWon = 0;
        let roundsLost = 0;
        let round = 1;
        let lastRound = round;
        let computerChoice;
        let winOrLose;
        let playerChoice;

        do {
            console.log("Round " + round);
            playerChoice = prompt("Rock, Paper, Scissors?");
            let pcLower = playerChoice.toLowerCase();

            while (pcLower != "rock" && pcLower != "paper" && pcLower != "scissors") {
                playerChoice = prompt("Invalid answer/nRock, Paper, Scissors?");
                pcLower = playerChoice.toLowerCase();
            }

            computerChoice = computerPlay();
            winOrLose = playRound(playerChoice, computerChoice);

            let winOrLoseSub = winOrLose.substring(0, winOrLose.indexOf("!"));

            if (winOrLoseSub === "You win") {
                roundsWon++;
                lastRound = round;
                round++;

                console.log(winOrLoseSub + "!");
                console.log("You chose: " + pcLower + " and the computer chose: " + computerChoice);
                console.log("You: " + roundsWon.toString() + " Computer: " + roundsLost.toString());
            }

            else if (winOrLoseSub === "You lose") {
                roundsLost++;
                lastRound = round;
                round++;

                console.log(winOrLoseSub + "!");
                console.log("You chose: " + pcLower + " and the computer chose: " + computerChoice);
                console.log("You: " + roundsWon.toString() + " Computer: " + roundsLost.toString());
            }

            else {
                console.log("A tie!");
                console.log("You chose: " + pcLower + " and the computer chose: " + computerChoice);
                round++;
            }
        } while (round <= 5);

        if (roundsWon > roundsLost) {
            console.log("You won more games!");
        }

        

        else if (roundsLost > roundsWon) {
            console.log("You lost more games!");
        }

        else {
            console.log("You tied games won and games lost!");
        }
    }*/