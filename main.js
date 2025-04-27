function getComputerChoice() {

    let value = Math.floor(Math.random() * 3) + 1
    let choices = ["Rock","Paper","Scissors"]

    return choices[value - 1]
}

function getHumanChoice() {
    return prompt("Choose Rock, Paper Scissors !")
}

function playRound(hummanchoice,computerchoice) {
    human = hummanchoice.toUpperCase()
    computer = computerchoice.toUpperCase()

    let states_dictionary={ 
        "ROCK":{"ROCK":"TIE","PAPER":"LOSE","SCISSORS":"WIN"}, 
        "PAPER":{"ROCK":"WIN","PAPER":"TIE","SCISSORS":"LOSE"}, 
        "SCISSORS":{"ROCK":"LOSE","PAPER":"WIN","SCISSORS":"TIE"}
    };

    let game = states_dictionary[human][computer]

    if (game == "TIE") {
        return [game, "It's a TIE, " + hummanchoice + " is the same has " + computerchoice]
    } else if (game == "WIN") {
        return [game, "You win, " + hummanchoice + " beats " + computerchoice]
    } else {
        return [game, "You Lose, " + hummanchoice + " loses against " + computerchoice]
    }
}

const container = document.getElementById("game-container")
const buttonRock = document.createElement("button")
buttonRock.textContent = "Rock"
buttonRock.id = "rock"
container.appendChild(buttonRock)

const buttonPaper = document.createElement("button")
buttonPaper.textContent = "Paper"
buttonPaper.id = "paper"
container.appendChild(buttonPaper)

const buttonScissors = document.createElement("button")
buttonScissors.textContent = "Scissors"
buttonScissors.id = "scissors"
container.appendChild(buttonScissors)

const displayResult = document.createElement("div")
displayResult.textContent = "Make your choice!"
displayResult.style.margin = "8px"
container.appendChild(displayResult)

const displayScore = document.createElement("div")
displayScore.textContent = "Results : "
container.appendChild(displayScore)
const scoreList = document.createElement("ul")
displayScore.appendChild(scoreList)

const displayGameResult = document.createElement("div")
container.appendChild(displayGameResult)


function showresult(humanChoice, computerChoice){

    const gameResult = playRound(humanChoice, computerChoice);
    displayResult.textContent = gameResult[1];

    const listItem = document.createElement('li');
    const listText = document.createElement('span');

    listItem.appendChild(listText);
    listText.textContent = gameResult[0];
    scoreList.appendChild(listItem);
    
    return gameResult[0]
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
  const computerChoice = getComputerChoice()
  button.addEventListener("click", () => playGame(button.id, computerChoice))
});

let humanScore = 0;
let computerScore = 0;
let ties = 0;
let games = 0;

function playGame(humanChoice, computerChoice) {

    const result = showresult(humanChoice, computerChoice);

    if (result == "WIN") {
        humanScore += 1
    } else if (result == "LOSE") {
        computerScore += 1
    } else {
        ties += 1
    }
    
    if (humanScore > computerScore && games+1 == 5) {
        displayGameResult.textContent = "You Win !"
    } else if (humanScore < computerScore && games+1 == 5) {
        displayGameResult.textContent = "You loose !"
    } else if (games+1 == 5) {
        displayGameResult.textContent = "It's a tie !"
    }

    games +=1
}