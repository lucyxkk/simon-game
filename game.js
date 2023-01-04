let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
const time = 700;

document.querySelector(".play").addEventListener("click", nextSequence);

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosen = buttonColors[randomNumber];
  gamePattern.push(randomChosen);
  showSequence(0);
}

function showSequence(counter) {
  let currentColor = gamePattern[counter];
  let button = document.querySelector(`#${currentColor}`);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, time);
  let music = new Audio(`sounds/${currentColor}.mp3`);
  music.play();

  counter++;
  if (counter < gamePattern.length) {
    setTimeout(function () {
      showSequence(counter);
    }, time);
  }
}

let checkCounter = 0;

function game(element) {
  if (element.id === gamePattern[checkCounter]) {
    checkCounter++;
    if (checkCounter === gamePattern.length) {
        checkCounter = 0;
        setTimeout(nextSequence, 500);
    }
    
  } else {
    gameOver();
  }
}

function gameOver() {
    document.querySelector("h1").innerHTML = "Game Over";
    let music = new Audio(`sounds/wrong.mp3`);
  music.play();
  alert("GAME OVER, YOUR SCORE IS: " + (gamePattern.length-1));

}