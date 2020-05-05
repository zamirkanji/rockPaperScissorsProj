const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("computer-result");


const showPlayerInput = document.getElementById("player-result");
const showCompInput = document.getElementById("computer-result");
const showWinner = document.getElementById("winner");

const startGameBtn = document.getElementById("start-game");

// input options
const inputOptions = document.querySelector(".playerInputRow");
const submitBtn = document.getElementById("submit-btn");


const orClickText = document.getElementById("or-click");

//button options
const choiceBtns = document.querySelector(".button-options");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

//clear game 
const clearBtn = document.getElementById("clear-btn-one");





//for player input variables
const ROCK = "ROCK";
// const Rock = "Rock";
const PAPER = "PAPER";
// const Paper = "Paper";
const SCISSORS = "SCISSORS";
// const Scissors = "Scissors";

const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;


//show game options 
const showGame = () => {
    inputOptions.classList.remove("vis-Hidden");
    inputOptions.classList.add("showGame");
    choiceBtns.classList.remove("vis-Hidden");
    choiceBtns.classList.add("showGame");
    orClickText.classList.remove("vis-Hidden");
    orClickText.classList.add("showGame");
}


//get player input from form 
const getPlayerInputForm = () => { //arrow function
    const playerInput = document.getElementById("playerChoice").value;

    if (
        playerInput !== ROCK &&
        // playerInput !== Rock &&
        playerInput !== PAPER &&
        // playerInput !== Paper &&
        playerInput !== SCISSORS 
        // playerInput !== Scissors 
    ) {
        alert("Invalid Choice! We chose Rock for you!");
        return DEFAULT_USER_CHOICE;
    }
    return playerInput;
}


// get btn input 
// const getBtnInput = () => {

// }


//randomize computer choice and return it 
const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67 && randomValue > 0.35) {
        return PAPER;
    } else {
        return SCISSORS;
    }
    // if (randomValue < 0.34) {
    //     return Rock;
    // } else if (randomValue < 0.67 && randomValue > 0.35) {
    //     return Paper;
    // } else {
    //     return Scissors; 
    // }
}

//compare choices from either btn/form input and computer choice
const determineWinner = (cChoice, pChoice) => {
    return cChoice === pChoice ? RESULT_DRAW :
        cChoice === ROCK && pChoice === PAPER ||
        // cChoice === Rock && pChoice === Paper || // conditional
            cChoice === SCISSORS && pChoice === ROCK || //conditional
            // cChoice === Scissors && pChoice === Rock ||
            cChoice === PAPER && pChoice === SCISSORS 
            // cChoice === Paper && pChoice === Scissors
            ? PLAYER_WINS : COMPUTER_WINS;
}



const gameisStarting = () => {
    const gameStarting = document.getElementById("game-Starting");
    gameStarting.textContent = "Game is starting...";
}


//starting game... show game options
startGameBtn.addEventListener("click", () => {

    if (gameIsRunning) {
        return; // doesn't start new games
    }
    gameIsRunning = true; //when the button clicks

    showGame(); //shows game options
})

// startGameBtn.addEventListener("click", function () {
    
// })





// const getInput = () => {

// }



//get random choice from getComputerChoice function and store in variable to pass into determine winner function as an argument for "cChoice"



//submit player section from INPUT FORM
submitBtn.addEventListener("click", function () {
    gameIsRunning = true;

    const playerSelection = getPlayerInputForm();
    showPlayerInput.textContent = `Player Chooses ${playerSelection}`;

    const computerChoice = getComputerChoice();
    showCompInput.textContent = `Computer Chooses ${computerChoice}`;

    const winner = determineWinner(computerChoice, playerSelection);
    showWinner.textContent = `Result: ${winner}`;
});



//find winner from normal buttons





const clearGame = () => {
    gameIsRunning = false;
    showWinner.innerHTML = ""; //clears winner for now... when i add a counter, will need to change
    showCompInput.innerHTML = ""; //clears winner for now... when i add a counter, will need to change
    showPlayerInput.innerHTML = ""; //clears winner for now... when i add a counter, will need to change
}


//clear game 
clearBtn.addEventListener("click", clearGame);