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
        return "It's a TIE, " + hummanchoice + " is the same has " + computerchoice
    } else if (game == "WIN") {
        return "You win, " + hummanchoice + " beats " + computerchoice
    } else {
        return "You Lose, " + hummanchoice + " loses against " + computerchoice
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))
