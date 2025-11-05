let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function updateResult() {
    const resultDiv = document.getElementById('scoreboard');
    resultDiv.textContent = 'Human: ' + playerScore + ' - Computer: ' + computerScore;

    const winnerDiv = document.getElementById('winner');
    if (playerScore >= 5) {
        winnerDiv.textContent = 'Congratulations! You are the overall winner!';
        resetGame();
    } else if (computerScore >= 5) {
        winnerDiv.textContent = 'Sorry! The computer is the overall winner!';
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

document.querySelectorAll('.myButton').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const resultMessage = playRound(playerChoice, computerChoice);
        const roundDiv = document.createElement('div');
        roundDiv.textContent = resultMessage;
        document.body.appendChild(roundDiv);
        updateResult();
    });
});