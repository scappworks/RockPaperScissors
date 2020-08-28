let bodyContainer = document.querySelector("#body-container");
let buttons = bodyContainer.querySelectorAll("button");
let resultsDiv = bodyContainer.querySelector("#results-div");
let resultsDivChildren = resultsDiv.getElementsByClassName("results-children");
let playerScore = 0;
let computerScore = 0;
let round = 0;
let gamesFinished = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.id.substring(0, button.id.indexOf("-"));
        let computerChoice = computerPlay();
        let results = playRound(playerChoice, computerChoice);

        if (gamesFinished) {
            gamesFinished = false;
            round = 0;
            playerScore = 0;
            computerScore = 0;

            resultsDivChildren[2].querySelector("#scorecard-end-result").style.visibility = "hidden";
            resultsDivChildren[2].querySelector("#scorecard-you").innerHTML = "You: " + playerScore;
            resultsDivChildren[2].querySelector("#scorecard-computer").innerHTML = "Computer: " + computerScore;
        }

        if (round < 5) {
            round++;
            resultsDivChildren[0].innerHTML = "Round " + round;
        }

        if (round <= 5)
        {
            resultsDivChildren[1].innerHTML = results;

            let resultSubstring = results.substring(0, results.indexOf("!"));

            if (resultSubstring === "You win") {
                playerScore++;
                resultsDivChildren[2].querySelector("#scorecard-you").innerHTML = "You: " + playerScore;
            }

            else if (resultSubstring === "You lose") {
                computerScore++;
                resultsDivChildren[2].querySelector("#scorecard-computer").innerHTML = "Computer: " + computerScore;
            }
        }

        if (round === 5) {
            if (playerScore > computerScore) {
                resultsDivChildren[2].querySelector("#scorecard-end-result").innerHTML = "You've won more games!";
                resultsDivChildren[2].querySelector("#scorecard-end-result").style.visibility = "visible";

                gamesFinished = true;
            }

            else if (playerScore < computerScore) {
                resultsDivChildren[2].querySelector("#scorecard-end-result").innerHTML = "You've lost more games!";
                resultsDivChildren[2].querySelector("#scorecard-end-result").style.visibility = "visible";

                gamesFinished = true;
            }

            else {
                resultsDivChildren[2].querySelector("#scorecard-end-result").innerHTML = "End result: Tie!";
                resultsDivChildren[2].querySelector("#scorecard-end-result").style.visibility = "visible";

                gamesFinished = true;
            }
        }
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