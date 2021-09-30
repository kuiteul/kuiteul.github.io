
let playSelection;
let computerSelection;
let computerResult = 0;
let userResult = 0;
let counter = 0;
let i = false;

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
                counter = 2;
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
                counter = 2;
                break;

            case "rock" :
                console.log("You won! paper beats rock");
                counter = 1;
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
                counter = 2;
                break;

            case "paper" :
                console.log("You won! cissor beats paper");
                counter = 1;
                break;
            default :
                console.log("No winner!");
                break;

        }
    }


}

function game(userInput) {

    do{

        userInput = prompt("Enter either 'rock' or 'paper' or 'cissor' ");

        userInput = userInput.toLowerCase();

        /*
        ** We check if user entered the correct word that we ask to him
        */

        while(userInput != "rock" && userInput != "paper" && userInput != "cissor") { 
            userInput = prompt("WARNING! Incorrect Entry. 'rock' or 'paper' or 'cissor'");
            userInput = userInput.toLowerCase();
        }

        playSelection = userInput;
        computerSelection = computerPlay();

        console.log(playRound(playSelection, computerSelection));

        /*
        ** the code below count the user and computer victory(ies)
        **/

        if(counter == 1){
            userResult = userResult + 1;
            counter = 0;
        }
        else if(counter == 2){
            computerResult = computerResult + 1;
            counter = 0; 
        }

        if(userResult == 5 || computerResult == 5)
        break;

    }while(i==false);
    
}

game();

if(userResult > computerResult) 
    console.log("Congratulations! You won!");

else 
    console.log("Sorry! You lose! computer beats you ");
