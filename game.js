let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];

document.querySelector(".play").addEventListener("click", nextSequence);

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosen = buttonColors[randomNumber];
  gamePattern.push(randomChosen);

  let button = document.querySelector(`#${randomChosen}`);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 500);
  let music = new Audio(`sounds/${randomChosen}.mp3`);
  music.play();
}

function game(element) {
  if (element.id === gamePattern[0]) {
    nextSequence();
  } else {
    document.querySelector("h1").innerHTML = "Game Over";
  }
}
