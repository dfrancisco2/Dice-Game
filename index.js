const diceGame = () => {
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);
    let diceArry = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
    let player1DiceGenerator = diceArry.indexOf(diceArry[randomNumber1]);
    let player2DiceGenerator = diceArry.indexOf(diceArry[randomNumber2]);
    let player1Result = diceArry[randomNumber1];
    let player2Result = diceArry[randomNumber2];

    if (player1DiceGenerator > player2DiceGenerator) {
        document.querySelector(".img1").setAttribute("src", player1Result);
        document.querySelector(".img2").setAttribute("src", player2Result);
        document.querySelector("h1").textContent = "Player 1 Wins";
    } else if (player1DiceGenerator < player2DiceGenerator) {
        document.querySelector(".img1").setAttribute("src", player1Result);
        document.querySelector(".img2").setAttribute("src", player2Result);
        document.querySelector("h1").textContent = "Player 2 Wins";
    } else {
        document.querySelector(".img1").setAttribute("src", player1Result);
        document.querySelector(".img2").setAttribute("src", player2Result);
        document.querySelector("h1").textContent = "It's a Draw!";
    }
}

diceGame();

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
    location.reload();
}

refreshButton.addEventListener('click', refreshPage);