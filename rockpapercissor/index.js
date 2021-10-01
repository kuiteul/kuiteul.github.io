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

/**
 * Code for the rock image
 */
let computerScore = document.querySelector("#computerScore");
let userScore = document.querySelector("#userScore");
let computerImageDisplayed = document.querySelector("#computerImageDisplayed");
let userImageDisplayed = document.querySelector("#userImageDisplayed");
let rock = document.querySelector("#rockImage");
let paper = document.querySelector("#paperImage");
let cissor = document.querySelector("#cissorImage");


/**
 * Function will tracking result of both players
 */

 function checkResult() {
    let imageToSelect = document.querySelector("#imageToSelect");
    if(userResult == 5 || computerResult ==5) {
        imageToSelect.style.display = "none";

        if(userResult > computerResult){
            document.querySelector("#title").innerHTML = "Congratulations!!! You beat me!";
        }
        else
            document.querySelector("#title").innerHTML = "Sorry! You lose! I beat you";
    }
}

/**
 * Code below is the event when image rock is clicked
 */
    rock.addEventListener("click", function() {
    computerSelection = computerPlay();
    switch(computerSelection) {
        case "rock" :
            computerImageDisplayed.setAttribute("src", "images/rock.png");
            
            break;

        case "paper" :
            computerImageDisplayed.setAttribute("src", "images/paper.png");
            computerResult = computerResult + 1;
            computerScore.innerHTML = computerResult;
            document.querySelector("#title").innerHTML = "You lose! paper wrap rock";
            break;
        case "cissor" :
            computerImageDisplayed.setAttribute("src", "images/cissor.png");
            userResult = userResult + 1;
            userScore.innerHTML = userResult;
            document.querySelector("#title").innerHTML = "you won! rock break cissor";
            break;
    }

    userImageDisplayed.setAttribute("src", "images/rock.png");

    checkResult();
 
});


/**
 * Code Below is the event when image paper is clicked
 */

    paper.addEventListener("click", function() {
        
        computerSelection = computerPlay();

        switch(computerSelection) {

            case "rock" :
                computerImageDisplayed.setAttribute("src", "images/rock.png");
                userResult = userResult + 1;
                userScore.innerHTML = userResult;
                document.querySelector("#title").innerHTML = "You won! paper wrap rock";
                break;
            
            case "paper" :
                computerImageDisplayed.setAttribute("src", "images/paper.png");
                break;
            case "cissor" :
                computerImageDisplayed.setAttribute("src", "images/cissor.png");
                computerResult = computerResult + 1;
                computerScore.innerHTML = computerResult;
                document.querySelector("#title").innerHTML = "You lose! cissor cut paper";
                break;
        }

        userImageDisplayed.setAttribute("src", "images/paper.png");
        
        checkResult();
    });

/**
 * Code Below is the event when image cissor is clicked
 */

    cissor.addEventListener("click", function() {
        
        computerSelection = computerPlay();

        switch(computerSelection) {

            case "rock" :
                computerImageDisplayed.setAttribute("src", "images/rock.png");
                computerResult = computerResult + 1;
                computerScore.innerHTML = computerResult;
                document.querySelector("#title").innerHTML = "You lose! rock break cissor";
                break;
            
            case "paper" :
                computerImageDisplayed.setAttribute("src", "images/paper.png");
                userResult = userResult + 1;
                userScore.innerHTML = userResult;
                document.querySelector("#title").innerHTML = "You won! cissor cut paper";
                break;
            case "cissor" :
                computerImageDisplayed.setAttribute("src", "images/cissor.png");
                break;
        }

        userImageDisplayed.setAttribute("src", "images/cissor.png");

        checkResult();
    });