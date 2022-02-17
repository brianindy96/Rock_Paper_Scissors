//Globalscope

const btns = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;
const cpuscoreboard = document.querySelector(".comscore");
const userscoreboard = document.querySelector(".yourscore");
const comment = document.querySelector(".comment");
const btn = document.querySelector(".btn");
const restart = document.querySelector(".restart");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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
    cpuscoreboard.innerHTML = `0`;
    userscoreboard.innerHTML = `0`;
    comment.innerHTML = ``;
    enabledButtons();
    restart.classList.remove("color");
}

// Count Score
function countScore(){
    cpuscoreboard.innerHTML = `${computerScore}`;
    userscoreboard.innerHTML = `${playerScore}`;
}

// First to 5 wins
function winnerDecider(){
    if(playerScore === 5){
        disabledButtons()
        comment.innerHTML = `You win the Game!!`;
        restart.classList.add("color");
        return;
    } else if(computerScore === 5){
        disabledButtons()
        comment.innerHTML = `Computer wins the Game..`;
        restart.classList.add("color");
        return;
    }
}

// Disabling and Enabling Buttons // 

function disabledButtons(){
    rock.setAttribute('disabled','disabled');
    paper.setAttribute('disabled','disabled');
    scissors.setAttribute('disabled','disabled');
}

function enabledButtons(){
    rock.removeAttribute('disabled');
    paper.removeAttribute('disabled');
    scissors.removeAttribute('disabled');
}
//Compare Results // 

function playround(x,playerSelection){
    if(x === playerSelection){
        comment.innerHTML = `It's a Tie!`;
        return "tie";
    } else if(x === "rock" && playerSelection === "scissors"){
        comment.innerHTML = `You Lose! Paper beats Rock"`;
        computerScore++;
        return "lose";
    } else if(x === "scissors" && playerSelection === "rock"){
        comment.innerHTML = `You Win! Rock beat Scissors`;
        playerScore++;
        return "win";
    } else if(x === "scissors" && playerSelection === "paper"){
        comment.innerHTML = `You Lose! Scissors beat Papers`;
        computerScore++;
        return "lose";
    } else if(x === "rock" && playerSelection === "paper"){
        comment.innerHTML = `You Win! Papers beat Rock"`;
        playerScore++;
        return "win";
    } else if(x === "paper" && playerSelection === "scissors"){
        comment.innerHTML = `You Win! Scissors beat Papers`;
        playerScore++;
        return "win";
    } else if(x === "paper" && playerSelection === "rock"){
        comment.innerHTML = `You Lose! Papers beat Rock!`;
        computerScore++;
        return "lose";
    }
}

//Restart Button //
restart.addEventListener('click', setZero);
