// show results on landing page 
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

// game over text
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



let inputGameIsRunning = false;
let buttonIsRunning = false;



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
    if (inputGameIsRunning) {
        return; // doesn't start new games
    }

    // inputGameIsRunning = true; //when the button clicks

    // buttonIsRunning = true;

    showGame(); //shows game options
})

//get random choice from getComputerChoice function and store in variable to pass into determine winner function as an argument for "cChoice"


// const diableButtonGame = () => {
//     rockBtn.disabled = true;
//     paperBtn.disabled = true;
//     scissorsBtn.disabled = true;
// }


//submit player section from INPUT FORM
submitBtn.addEventListener("click", function () {
    inputGameIsRunning = true;

    // if (inputGameIsRunning) {
    //     disableButtonGame();
    // }


    const playerSelection = getPlayerInputForm(); //storing playerInput in playerSelection
    showPlayerInput.textContent = `Player Chooses ${playerSelection}`;
    console.log(playerSelection);

    const computerChoice = getComputerChoice(); //storing random computer output in computerChoice
    showCompInput.textContent = `Computer Chooses ${computerChoice}`;

    const winner = determineWinner(computerChoice, playerSelection); //using playerselection and computerChoice as arguments to call the determineWinner func
    showWinner.textContent = `Result: ${winner}`;


    //show image for player selection
    if (playerSelection === ROCK) {
        showRock();
    } else if (playerSelection === PAPER) {
        showPaper();
    } else {
        showScissors();
    }

    //show image for computer random selection
    if (computerChoice === ROCK) {
        showRock();
    } else if (computerChoice === PAPER) {
        showPaper();
    } else {
        showScissors();
    }

    //add to counter for each winner
    if (winner === PLAYER_WINS && inputGameIsRunning) {
        playerCount.textContent++;
        console.log(playerCount);
    } else if (winner === COMPUTER_WINS && inputGameIsRunning) {
        computerCount.textContent++;
    }
});







//SHOW IMAGE FUNCTIONS
const showRock = () => {
    rockImgResult.classList.remove("vis-Hidden");
    rockImgResult.classList.add("showRock");
}
const showPaper = () => {
    paperImgResult.classList.remove("vis-Hidden");
    paperImgResult.classList.add("showPaper");
}
const showScissors = () => {
    scissorsImgResult.classList.remove("vis-Hidden");
    scissorsImgResult.classList.add("showScissors");
}















//game is over text FUNCTION
const gameOverText = () => {
    return gameOver.textContent = "Game Over!";
}

// playerCount === 5 ? gameOverText() : inputGameIsRunning;
// computerCount === 5 ? gameOverText() : inputGameIsRunning;


//need to figure out how to stop the game when winner reaches 5
// THERE IS a better way to do this - need to end game and show "Game Over" text
if (playerCount === 5) {
    gameOverText();
    // gameOver.textContent = "Game Over!";
} else if (computerCount === 5) {
    gameOverText();
}
































// BUTTONS - if any button is clicked, disable submit btn for form input and start ONLY button game
// btn click - show image and play round 

const playRock = () => {
    buttonIsRunning = true;

    showRock();

    // inputGameIsRunning = true;


    const playerSelection = ROCK;
    showPlayerInput.textContent = `Player Chooses ${playerSelection}`;

    const computerChoice = getComputerChoice();
    showCompInput.textContent = `Computer Chooses ${computerChoice}`;

    const winner = determineWinner(computerChoice, playerSelection);
    showWinner.textContent = `Result: ${winner}`;

    if (winner === PLAYER_WINS && buttonIsRunning) {
        playerCount.textContent++;
    } else if (winner === COMPUTER_WINS && buttonIsRunning) {
        computerCount.textContent++;
    }
}


const playPaper = () => {
    buttonIsRunning = true;

    showPaper();
    // inputGameIsRunning = true;


    const playerSelection = PAPER;
    showPlayerInput.textContent = `Player Chooses ${playerSelection}`;

    const computerChoice = getComputerChoice();
    showCompInput.textContent = `Computer Chooses ${computerChoice}`;

    const winner = determineWinner(computerChoice, playerSelection);
    showWinner.textContent = `Result: ${winner}`;

    if (winner === PLAYER_WINS && buttonIsRunning) {
        playerCount.textContent++;
    } else if (winner === COMPUTER_WINS && buttonIsRunning) {
        computerCount.textContent++;
    }
}

const playScissors = () => {
    buttonIsRunning = true;

    showScissors();

    // inputGameIsRunning = true;

    const playerSelection = SCISSORS;
    showPlayerInput.textContent = `Player Chooses ${playerSelection}`;

    const computerChoice = getComputerChoice();
    showCompInput.textContent = `Computer Chooses ${computerChoice}`;

    const winner = determineWinner(computerChoice, playerSelection);
    showWinner.textContent = `Result: ${winner}`;

    if (winner === PLAYER_WINS && buttonIsRunning) {
        playerCount.textContent++;
    } else if (winner === COMPUTER_WINS && buttonIsRunning) {
        computerCount.textContent++;
    }
}

//event listeners for btns
rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissors);










// if buttonIsRunning, can't use inputgame UNTIL game reaches 5 and is cleared, then can choose either game to start running 

// if one of the play rock, paper, or scissors buttons are pressed, buttonIsRunning is true and inputGame is false

// if (playRock) {
//     console.log("test");
//     buttonIsRunning = true;
//     inputGameIsRunning = false;

// } else if (playPaper) {
//     buttonIsRunning = true;
//     inputGameIsRunning = false;

// } else if (playScissors) {
//     buttonIsRunning = true;
//     inputGameIsRunning = false;

// }



// if inputGame is false, the submit button should be disabled - if its true, it should be enabled

// if (!inputGameIsRunning) {
//     submitBtn.disabled = true;
// } else {
//     inputGameIsRunning = true;
//     submitBtn.disabled = false;
// }









// CLEAR WHOLE GAME - including COUNTER
const clearGame = () => {

    inputGameIsRunning = false;
    buttonIsRunning = false;

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


    //clear COUNTER - ***FIND A DIFFERENT WAY***
    // playerCount.textContent = 0;
    // computerCount.textContent = 0;
    playerCount.innerHTML = "";
    computerCount.innerHTML = "";


    //remove images from results box
    rockImgResult.classList.remove("showRock");
    rockImgResult.classList.add("vis-Hidden");

    paperImgResult.classList.remove("showPaper");
    paperImgResult.classList.add("vis-Hidden");

    scissorsImgResult.classList.remove("showScissors");
    scissorsImgResult.classList.add("vis-Hidden");



    // inputGameIsRunning = false;
}
//clear game event 
clearBtn.addEventListener("click", clearGame);