let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);   // called to start and play the game.
    })
})


const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();    // called to generate a random choice between rock, paper and scissors.
    if(userChoice === computerChoice) {
        drawGame();     // called when the game is drawn.
    } 
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true; 
        }
        else if(userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            userWin = computerChoice === "rock" ?  false : true;
        }
        showWinner(userWin, userChoice, computerChoice);    // called to display the scores and winner between user and computer.
    }
}


const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = () => {
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#1b1b35";
}


const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
