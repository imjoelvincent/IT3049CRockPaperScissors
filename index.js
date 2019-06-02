
const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");

let userScore =0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("hidden");
const result_p = document.querySelector(".result > p");
const score = document.querySelector("score");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
var tmp;
var user = document.getElementById("user");
var selection = new Array();

//var computerHistory = new Array();
var round = 0;
var winner = " ";

function history(selection)
{
    var result = " ";
    for (var i = 0; i < selection.length; i++){
        result += ("Round " + selection[i][0] + ": " + selection[i][3] + " Wins!! (Computer picked: " + selection[i][2] + ", " + tmp + " picked: " + selection[i][1] + ")"+ "</br>");    
    }

    document.getElementById('finalResult').innerHTML = result;
}

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
    winner = tmp;
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! `;
}
function lose(userChoice, computerChoice){
    winner = "Computer";
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses ${convertToWord(computerChoice)}. Computer Wins!! `;
}
function draw(userChoice, computerChoice){
    winner = `No one `;
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw! `;

}

//funciton and swtich statements to compare the results
function game(userChoice) {
    const computerChoice = getComputerChoice();
    round++;
    switch (userChoice + computerChoice)
    {
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
    selection.push([round, convertToWord(userChoice), convertToWord(computerChoice), winner]);
    history(selection);

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

startButton.addEventListener("click", function(startButtonClickEvent) 
{
    startButtonClickEvent.preventDefault();
    console.log("user clicked the start button");
    tmp = user.value;
    if(user.value == ""){
        alert("Name cannot be empty");
        return false;
}
else
{
    welcomeScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
}
});

reset.addEventListener("click", function(resetClickEvent) 
{
    alert("Game is going to be reset!")
    window.location.reload();
    welcomeScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");

});

gameForm.addEventListener("submit", function(gameFormSubmitEvent){
    gameFormSubmitEvent.preventDefault();
});