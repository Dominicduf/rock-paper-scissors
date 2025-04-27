function getComputerChoice() {

    let value = Math.floor(Math.random() * 3) + 1
    let choices = ["Rock","Paper","Scissors"]

    return choices[value - 1]
}

// function getHumanChoice() {
//     return prompt("Choose Rock, Paper Scissors !")
// }

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


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  const computerchoice = getComputerChoice()
  button.addEventListener("click", () => console.log(playRound(button.id, computerchoice)))
});

// function playGame() {

//     humanScore = 0
//     computerScore = 0
//     ties = 0

//     for (let i = 0; i < 5; i++) {

//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
    
//         const[result,message] = playRound(humanSelection, computerSelection)

//         console.log(message)

//         if (result == "WIN") {
//             humanScore += 1
//         } else if (result == "LOSE") {
//             computerScore += 1
//         } else {
//             ties += 1
//         }
//     }

//     if (humanScore > computerScore) {
//         return "You are the winner !"
//     } else {
//         return "Better luck next time :("
//     }

// }