console.log("Hello World!");

let result = ""
let rps = ["Rock", "Paper", "Scissors"]
let computerScore = 0
let playerScore = 0
let computerSelection

function playRound(playerSelection, computerSelection){
	if((playerSelection == 0 && computerSelection == 2) || playerSelection > computerSelection){
		playerScore++
		result = `${rps[playerSelection]} vs ${rps[computerSelection]} <br />you win!`
	}
	else if(playerSelection == computerSelection){
		result = "tie!"
	}
	else if((playerSelection == 2 && computerSelection == 0) || playerSelection) {
		computerScore++
		result = "you lost!"
	}
	if(computerScore == 5 || playerScore == 5){
		computerScore == 5 ? console.log("Computer Wins!") : console.log("Player Wins!")
		computerScore = 0
		playerScore = 0
	}
	document.getElementById('result').innerHTML = result
}

function submitPlayerSelection(selection) {
	let playerSelection = selection
	computerSelection = Math.floor(Math.random()*(3)+0)
	console.log(playerSelection, computerSelection)
	playRound(playerSelection, computerSelection)
}

function setResult(won, playerSelection, computerSelection){
	let winner, loser;
	won ? (winner = playerSelection, loser = computerSelection) : (winner = computerSelection, loser = playerSelection)
}