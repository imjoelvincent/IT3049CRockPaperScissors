"use strict";

const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");

let userScore =0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("hidden");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//computer choice 
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallComputerWord = "computer".fontsize(3);
    result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} beats ${convertToWord(computerChoice)}${(smallComputerWord)}. You win! `;

}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallComputerWord = "computer".fontsize(3);
    result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} loses ${convertToWord(computerChoice)}${(smallComputerWord)}. Computer Wins!! `;
}
function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3);
    const smallComputerWord = "computer".fontsize(3);
    result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)} equals ${convertToWord(computerChoice)}${(smallComputerWord)}. It's a draw! `;

}

//funciton and swtich statements to compare the results
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}



function main() {

    rock_div.addEventListener('click', function(){
        game("r");


    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })

}

main();

const gameForm = document.getElementById("gameForm");
startButton.addEventListener("click", function(startButtonClickEvent) {
    startButtonClickEvent.preventDefault();

    console.log("user clicked the start button");

    welcomeScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");
});

gameForm.addEventListener("submit", function(gameFormSubmitEvent){
    gameFormSubmitEvent.preventDefault();
});