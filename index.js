"use strict";

const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const gameScreen = document.getElementById("gameScreen");
startButton.addEventListener("click", function(startButtonClickEvent) {
    startButtonClickEvent.preventDefault();

    console.log("user clicked the start button");

    welcomeScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");
});