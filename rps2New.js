const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("computer-result");


const showPlayerInput = document.getElementById("player-result");
const showCompInput = document.getElementById("computer-result");
const showWinner = document.getElementById("winner");


//start game BUTTONS
// const startGameIndex = document.getElementById("start-game-index"); //from index.html
const startGameBtn = document.getElementById("start-game");

// input options - TO SHOW
const inputOptions = document.querySelector(".playerInputRow"); //
const submitBtn = document.getElementById("submit-btn");

//or click (text)
const orClickText = document.getElementById("or-click");

//button options
const choiceBtns = document.querySelector(".button-options");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

//rps images IN result
const rockImgResult = document.getElementById("rock-result");
const paperImgResult = document.getElementById("paper-result");
const scissorsImgResult = document.getElementById("scissors-result");



//counters
const playerCount = document.getElementById("player-count");
const computerCount = document.getElementById("computer-count");


const gameOver = document.getElementById("game-over");


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


//Counters to keep score
playerCount.textContent = 0;
computerCount.textContent = 0;


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
    const playerInput = document.getElementById("playerChoice").value.toUpperCase();

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



// const gameisStarting = () => {
//     const gameStarting = document.getElementById("game-Starting");
//     gameStarting.textContent = "Game is starting...";
// }


//starting game... show game options - FROM INDEX PAGE
startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) {
        return; // doesn't start new games
    }

    gameIsRunning = true; //when the button clicks

    showGame(); //shows game options
})

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


    //show image for player selection
    if (playerSelection === ROCK) {
        playRock();
    } else if (playerSelection === PAPER) {
        playPaper();
    } else {
        playScissors();
    }

    //show image for computer random selection
    if (computerChoice === ROCK) {
        playRock();
    } else if (computerChoice === PAPER) {
        playPaper();
    } else {
        playScissors();
    }

    //add to counter for each winner
    if (winner === PLAYER_WINS) {
        playerCount.textContent++;
    } else if (winner === COMPUTER_WINS) {
        computerCount.textContent++;
    }
});

const gameOverText = () => {
    return gameOver.textContent = "Game Over!";
}

// playerCount === 5 ? gameOverText() : gameIsRunning;
// computerCount === 5 ? gameOverText() : gameIsRunning;


//need to figure out how to stop the game when winner reaches 5
// THERE IS a better way to do this - need to end game and show "Game Over" text
if (playerCount === 5) {
    gameOverText();
    // gameOver.textContent = "Game Over!";
} else if (computerCount === 5) {
    gameOverText();
}




// BUTTONS
// btn click - show image and play round 
const playRock = () => {
    rockImgResult.classList.remove("vis-Hidden");
    rockImgResult.classList.add("showRock");
}

const playPaper = () => {
    paperImgResult.classList.remove("vis-Hidden");
    paperImgResult.classList.add("showPaper");
}

const playScissors = () => {
    scissorsImgResult.classList.remove("vis-Hidden");
    scissorsImgResult.classList.add("showScissors");
}
//event listeneres for btns
rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissors);





//find winner from normal buttons








// CLEAR WHOLE GAME - including COUNTER
const clearGame = () => {
    gameIsRunning = false;
    showWinner.innerHTML = ""; //clears winner for now... when i add a counter, will need to change
    showCompInput.innerHTML = ""; //clears winner for now... when i add a counter, will need to change
    showPlayerInput.innerHTML = ""; //clears winner for now... when i add a counter, will need to change

    //remove show game and add back vis-hidden
    inputOptions.classList.remove("showGame");
    inputOptions.classList.add("vis-Hidden");
    choiceBtns.classList.remove("showGame");
    choiceBtns.classList.add("vis-Hidden");
    orClickText.classList.remove("showGame");
    orClickText.classList.add("vis-Hidden");

    //clear COUNTER

    //remove images from results box
    rockImgResult.classList.remove("showGame");
    rockImgResult.classList.add("vis-Hidden");

    paperImgResult.classList.remove("showGame");
    paperImgResult.classList.add("vis-Hidden");

    scissorsImgResult.classList.remove("showGame");
    scissorsImgResult.classList.add("vis-Hidden");
}
//clear game event 
clearBtn.addEventListener("click", clearGame);