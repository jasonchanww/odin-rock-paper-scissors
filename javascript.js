function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
    return "unknown";
}


function getHumanChoice(){
    let humanChoice = ""+prompt("get human choice");
    return humanChoice.toLowerCase();
}


let computerScore = 0;
let humanScore = 0;

function playGame(){
    
    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice) return;
        if(humanChoice == "rock"){
            computerChoice == "paper" ? computerScore++ : humanScore++;
        }
        else if(humanChoice == "paper"){
            computerChoice == "rock" ? humanScore++ : computerScore++;
        }
        else if(humanChoice == "scissors"){
            computerChoice == "rock" ? computerScore++ : humanScore++;
        }
        else{
            computerScore++;
        }
    }

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        alert(`${humanSelection} vs ${computerSelection}
            ${humanScore} : ${computerScore}`)
    }
    if(humanScore > computerScore){
        alert("human wins");
    }
    else if(humanScore < computerScore){
        alert("computer wins");
    }
    else{
        alert("tie");
    }
}

function changeScore(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) return;
    if(humanChoice == "rock"){
        computerChoice == "paper" ? computerScore++ : humanScore++;
    }
    else if(humanChoice == "paper"){
        computerChoice == "rock" ? humanScore++ : computerScore++;
    }
    else if(humanChoice == "scissors"){
        computerChoice == "rock" ? computerScore++ : humanScore++;
    }
    else{
        computerScore++;
    }
}

function playRound(humanSelection){
    if(computerScore >= 5 || humanScore >= 5) return;
    const computerSelection = getComputerChoice();
    changeScore(humanSelection, computerSelection);
    const rounds = document.querySelector("#round-list");
    const p = document.createElement('li');
    p.textContent = `${humanSelection} vs ${computerSelection}          ${humanScore} : ${computerScore}`;
    rounds.appendChild(p);

    checkWin();
}

function checkWin(){
    if(computerScore >= 5){
        createResultH1("computer Wins")
    }
    else if(humanScore >= 5){
        createResultH1("human Wins")
    }
}

function createResultH1(text){
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    h1.textContent = text;
    body.appendChild(h1);
}

const btn_rock = document.querySelector("#rock");
const btn_paper = document.querySelector("#paper");
const btn_scissors = document.querySelector("#scissors");

btn_rock.addEventListener("click", e=>{
    playRound('rock');
});
btn_paper.addEventListener("click", e=>{
    playRound('paper');
});
btn_scissors.addEventListener("click", e=>{
    playRound('scissors');
});

//playGame();