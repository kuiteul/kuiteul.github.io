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

let playSelection = "cissor";
let computerSelection = computerPlay();

// Function playRound
function playRound(playSelection, computerSelection) {

    if(playSelection == "rock" ) {
        
        switch (computerSelection){
            
            case "cissor" :
                console.log("You won! rock beats cissor!");

            case "paper" :
                console.log("You lose! paper beats rock");
            default : 
                console.log("No winner!");

        }
    
    }
    else if(playSelection == "paper") {
        switch (computerSelection){
            
            case "cissor" :
                console.log("You lose! cissor beats paper!");

            case "rock" :
                console.log("You won! paper beats rock");
            default : 
                console.log("No winner!");

        }
        
    }
    else if(playSelection == "cissor"){

        switch (computerSelection){
            
            case "rock" :
                console.log("You lose! rock beats cissor!");

            case "paper" :
                console.log("You won! cissor beats paper");
            default :
                console.log("No winner!");

        }
    }


}

function game(userInput) {

    for(let i = 0; i < 4; i++) {

        userInput = prompt("Enter either 'rock' or 'paper' or 'cissor' ");

    } 
    
}
