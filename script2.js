
//Globalscope

const btns = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;


//ComputerPlay
function computerPlay(){
    let choice = ["rock","paper","scissors"];
    x = choice[Math.floor(Math.random()* choice.length)];
    console.log(`PC Choice is ${x}`);
    return x;
}

//Player's Play
btns.forEach(btn => btn.addEventListener('click', playRound))
function playRound(e){
    const y = e.target.id; // from the event 'click' , we target the id that we 'click' and hold it in a variable y
    console.log(`User's Choice is ${y}`);
    const x = computerPlay();
    playround(x,y);
    countScore();
    winnerDecider();
    
}
// Reset Score
function setZero(){
    playerScore = 0;
    computerScore = 0;
    console.log(`The Score is back to User:${playerScore} to PC: ${computerScore}`);
}

// Count Score
function countScore(){
    console.log(`User score is ${playerScore}`)
    console.log(`PC score is ${computerScore}`)
}

// First to 5 wins
function winnerDecider(){
    if(playerScore === 5){
        console.log("Player Wins")
        setZero();
        return;
    } else if(computerScore === 5){
        console.log("Computer Wins");
        setZero();
        return;
    }
}
//Compare Results // 

function playround(x,playerSelection){
    if(x === playerSelection){
        console.log("It's a Tie!");
        return "tie";
    } else if(x === "rock" && playerSelection === "scissors"){
        console.log("You Lose! Paper beats Rock");
        computerScore++;
        return "lose";
    } else if(x === "scissors" && playerSelection === "rock"){
        console.log("You Win! Rock beat Scissors");
        playerScore++;
        return "win";
    } else if(x === "scissors" && playerSelection === "paper"){
        console.log("You Lose! Scissors beat Papers");
        computerScore++;
        return "lose";
    } else if(x === "rock" && playerSelection === "paper"){
        console.log("You Win! Papers beat Rock");
        playerScore++;
        return "win";
    } else if(x === "paper" && playerSelection === "scissors"){
        console.log("You Win! Scissors beat Papers");
        playerScore++;
        return "win";
    } else if(x === "paper" && playerSelection === "rock"){
        console.log("You Lose! Papers beat Rock!");
        computerScore++;
        return "lose";
    }
}

