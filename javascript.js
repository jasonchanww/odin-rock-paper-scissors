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
    let humanChoice = prompt("get human choice");
}

