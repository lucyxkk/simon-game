let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];

document.querySelector(".play").addEventListener("click", nextSequence);

function nextSequence() {
    let randomNumber = (Math.floor(Math.random()*4));
    let randomChosen = buttonColors[randomNumber];
    gamePattern.push(randomChosen);

    if (randomChosen === "green") {
        document.querySelector("#green").classList.add("pressed");
        setTimeout(function() {
            document.querySelector("#green").classList.remove("pressed");
            
        }, 500);
        let green = new Audio('sounds/green.mp3');
                green.play();
        
    } if (randomChosen === "red") {
        document.querySelector("#red").classList.add("pressed");
        setTimeout(function() {
            document.querySelector("#red").classList.remove("pressed");
            
        }, 500);
        let red = new Audio('sounds/red.mp3');
                red.play();
    } if (randomChosen === "yellow") {
        document.querySelector("#yellow").classList.add("pressed");
        setTimeout(function() {
            document.querySelector("#yellow").classList.remove("pressed");
            
        }, 500);
        let yellow = new Audio('sounds/yellow.mp3');
                yellow.play();
    } if (randomChosen === "blue") {
        document.querySelector("#blue").classList.add("pressed");
        setTimeout(function() {
            document.querySelector("#blue").classList.remove("pressed");
            
        }, 500);
        let blue = new Audio('sounds/blue.mp3');
                blue.play();
    } else {
        new Audio('sounds/wrong.mp3');
            wrong.play();
    }
}

