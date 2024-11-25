// Starting the scores for both player and computer
let playerScore = 0;
let computerScore = 0;

// Function to handle a player's move
function play(playerChoice) {
    // If the game has already ended (someone reached 5 points), stop playing
    if (playerScore >= 5 || computerScore >= 5) {
        return;
    }

    // List of options for the computer to choose from
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Random choice for the computer

    //Computer vs human playing results
    let resultMessage;
    if (playerChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = "You win this round!";
        playerScore++; 
    } else {
        resultMessage = "You lose this round.";
        computerScore++; 
    }

    // Updating the scores
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('result').textContent =
        `You picked ${playerChoice}, the computer picked ${computerChoice}. ${resultMessage}`;

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "Congratulations! Click the reset button to play again." : "Game over, the computer won. Click the reset. utton to play again.";
        document.getElementById('result').textContent += ` ${winner}`;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('result').textContent = "Take your pick.";
}


