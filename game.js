let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = (Math.floor(Math.random()*4));
    let randomChosen = buttonColors[randomNumber];
    gamePattern.push(randomChosen);

    if (randomChosen === "green") {
        document.querySelector("#green").classList.add("pressed");
        setTimeout(function() {
            document.querySelector("#green").classList.remove("pressed");
            
        }, 1000);
        
    } if (randomChosen === "red") {
        document.querySelector("#red").classList.add("pressed");
        setTimeout(function() {
            document.querySelector("#red").classList.remove("pressed");
            
        }, 1000);
    } if (randomChosen === "yellow") {
        document.querySelector("#yellow").classList.add("pressed");
        setTimeout(function() {
            document.querySelector("#yellow").classList.remove("pressed");
            
        }, 1000);
    } if (randomChosen === "blue") {
        document.querySelector("#blue").classList.add("pressed");
        setTimeout(function() {
            document.querySelector("#blue").classList.remove("pressed");
            
        }, 1000);
    } 

    
}

