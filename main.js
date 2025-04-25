function getComputerChoice() {

    let value = Math.floor(Math.random() * 3) + 1
    let choices = ["Rock","Paper","Scissors"]

    return choices[value - 1]
}

function getHumanChoice() {
    return prompt("Choose Rock, Paper Scissors !")
}
console.log(getHumanChoice())