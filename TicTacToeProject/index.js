
let playSelection;
let computerSelection;

function computerPlay() {

    let computerResult = parseInt(Math.random() * 3);
    let rock = "rock";
    let paper = "paper";
    let cissor = "cissor";

    if(computerResult == 0)

        return rock;
    
    else if(computerResult == 1)
            
        return paper;

    else 

        return cissor;

}

// Function playRound
function playRound(playSelection, computerSelection) {

    if(playSelection == "rock" ) {
        
        switch (computerSelection){
            
            case "cissor" :
                console.log("You won! rock beats cissor!");
                break;

            case "paper" :
                console.log("You lose! paper beats rock");
                break;
            default : 
                console.log("No winner!");
                break;

        }
    
    }
    else if(playSelection == "paper") {
        switch (computerSelection){
            
            case "cissor" :
                console.log("You lose! cissor beats paper!");
                break;

            case "rock" :
                console.log("You won! paper beats rock");
                break;
            default : 
                console.log("No winner!");
                break;

        }
        
    }
    else if(playSelection == "cissor"){

        switch (computerSelection){
            
            case "rock" :
                console.log("You lose! rock beats cissor!");
                break;

            case "paper" :
                console.log("You won! cissor beats paper");
                break;
            default :
                console.log("No winner!");
                break;

        }
    }


}

function game(userInput) {

    for(let i = 0; i <= 4; i++) {

        userInput = prompt("Enter either 'rock' or 'paper' or 'cissor' ");

        userInput = userInput.toLowerCase();

        /*
        ** We check if user entered the correct word that we ask to him
        */

        while(userInput != "rock" && userInput != "paper" && userInput != "cissor") {
            userInput = prompt("You entered wrong word! Enter either 'rock' or 'paper' or 'cissor'");
            userInput = userInput.toLowerCase();
        }

        playSelection = userInput;
        computerSelection = computerPlay();

        console.log(playRound(playSelection, computerSelection));

    } 
    
}

game();
