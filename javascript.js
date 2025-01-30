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



function playGame(){
    let computerScore = 0;
    let humanScore = 0;
    
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

playGame();