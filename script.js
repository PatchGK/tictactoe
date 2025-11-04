function getComputerChoice() {
    const choice = Math.random() * 2;
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Enter rock, paper, or scissors:");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie";
        }

        else if (humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "You win this round!";
        }
        else {
            computerScore++;
            return "Computer wins this round!";
        }
    }

    if (humanScore < 5 && computerScore < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        playGame();
    }
    else if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
    }
    else {
        console.log("Computer won the game! Better luck next time.");
    }
}

playGame(getHumanChoice(), getComputerChoice());

console.log(`Human: ${humanScore} Computer: ${computerScore}`);