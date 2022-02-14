// Function computerPlay that will randomly return 'Rock', 'Paper' or 'Scissors'

// Global Scope

let playerScore =0;
let computerScore =0 ;
// use Math.random() function to get the random number between (0-1);
// Multiply by the array length to get the numbers between (0-arrayLength);
// Use Math.floor() to get the index ranging from (0 to arrayLength-1);
function computerPlay(){
    let choice = ["Rock","Paper","Scissors"];
    x = choice[Math.floor(Math.random()* choice.length)];
    return x;
}



// Function that plays a single round of Rock Paper Scissors.
// function should take two parameters

// 1. playerSelection
// 2. computeSelection

// playerSelection 
// if player chooses rock, on click, return string Rock
// if player chooses paper, on click, return string Paper
// if player chooses scisscors, on click, return string Scissors


function playerPlay(){
    let playerSelection = prompt("Choose Rock, Paper, or Scissors?: ");

    if(playerSelection.toLowerCase() === "rock"){
        return "Rock";
    } else if(playerSelection.toLowerCase() === "paper"){
        return "Paper";
    } else if (playerSelection.toLowerCase() === "scissors"){
        return "Scissors";
    }
}
   
//Compare playerPlay() and computerPlay() result


x = computerPlay();
y = playerPlay();



// Numbers of Outcomes in Rock, Paper, Scissors
// Tie
// you rock, cpu paper
// you rock, cpu scissors
// you scissors, cpu rock
// you scissors, cpu paper
// you paper, cpu scissors
// you paper, cpu rock

//Chose if-else Conditions
// can be written in switch case? 

/*
function playround(x,y){
    if(x === y){
        return "Tie";
    } else if(x === "Rock" && y === "Scissors"){
        return "You Lose! Paper beats Rock";
    } else if(x === "Scissors" && y === "Rock"){
        return "You Win! Rock beat Scissors"
    } else if(x === "Scissors" && y === "Paper"){
        return "You Lose! Scissors beat Papers";
    } else if(x === "Rock" && y === "Paper"){
        return "You Win! Papers beat Rock";
    } else if(x === "Paper" && y === "Scissors"){
        return "You Win! Scissors beat Papers";
    } else if(x === "Paper" && y === "Rock"){
        return "You Lose! Papers beat Rock!";
    }
}
*/ 

function playround(x,y){
    if(x === y){
        console.log("It's a Tie!");
        return "tie";
    } else if(x === "Rock" && y === "Scissors"){
        console.log("You Lose! Paper beats Rock");
        computerScore++;
        return "lose";
    } else if(x === "Scissors" && y === "Rock"){
        console.log("You Win! Rock beat Scissors");
        playerScore++;
        return "win";
    } else if(x === "Scissors" && y === "Paper"){
        console.log("You Lose! Scissors beat Papers");
        computerScore++;
        return "lose";
    } else if(x === "Rock" && y === "Paper"){
        console.log("You Win! Papers beat Rock");
        playerScore++;
        return "win";
    } else if(x === "Paper" && y === "Scissors"){
        console.log("You Win! Scissors beat Papers");
        playerScore++;
        return "win";
    } else if(x === "Paper" && y === "Rock"){
        console.log("You Lose! Papers beat Rock!");
        computerScore++;
        return "lose";
    }
}

// playRound() 5 times inside of game()
// keeps score and reports a winner or loser at the end


function game(){
    for (let i = 0; i<5; i++){
        x = computerPlay();
        y = playerPlay();
        z = console.log(playround(x,y));
        console.log(`CPU: ${x} Score: ${computerScore}`);
        console.log(`You: ${y} Score: ${playerScore}`);
    }
}

// if player wins, playerscore ++ print("Score is: Player${playerscore} - Computer ${computerScore})
// if computer wins, computerScore ++ 
// if tie, 
function countScore(z){
    if(z== "win"){
        playerScore++;
    } else if(z == "lose"){
        computerScore++;
    } else if(z == "tie"){
        return;
    }
}


game();




