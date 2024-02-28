function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}


function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();

    switch(playerSelection){
        case "Rock":
            switch(computerSelection){
                case "Rock":
                    return "Tie!";

                case "Paper":
                    return "You Lose! Paper beats Rock";

                case "Scissors":
                    return "You Win! Rock beats Scissors";
            }

        case "Paper":
            switch(computerSelection){
                case "Rock":
                    return "You Win! Paper beats Rock";

                case "Paper":
                    return "Tie!"

                case "Scissors":
                    return "You Lose! Scissors beats Paper"
            }

        case "Scissors":
            switch(computerSelection){
                case "Rock":
                    return "You Lose! Rock beats Scissors"

                case "Paper":
                    return "You Win! Scissors beats Paper"

                case "Scissors":
                    return "Tie!"
            }
        
    }
}


