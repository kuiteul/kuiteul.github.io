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

/**
 * Declaration of variables
 */
let computerScore = document.querySelector("#computerScore");
let userScore = document.querySelector("#userScore");
let computerImageDisplayed = document.querySelector("#computerImageDisplayed");
let userImageDisplayed = document.querySelector("#userImageDisplayed");
let rock = document.querySelector("#rockImage");
let paper = document.querySelector("#paperImage");
let cissor = document.querySelector("#cissorImage");


/**
 * Function to display button to play back
 */

function showButton() {
    let divButton = document.querySelector("#button");
    let button = document.createElement('button');
    divButton.appendChild(button);
    button.textContent = "Play again";
    button.setAttribute("id", "play");

    /**
     * Event who will appear when user'll click
     */
    button.addEventListener("click", function() {
        imageToSelect.style.display = "flex";
        button.style.display = "none";
        userResult = 0;
        computerResult = 0;
        userScore.innerHTML = "0";
        computerScore.innerHTML = "0";
        document.querySelector("#title").innerHTML = "Great! Let's go to another party";
        warning();
        document.querySelector("h2").innerHTML = "Choose";
        
    });
} 

/**
 * Warning function
 */

    function warning() {
        if(userResult == 5 || computerResult == 5)
            document.querySelector("#warning").innerHTML = "Party is over";
        else
            document.querySelector("#warning").innerHTML = "Party began!";
    }

/**
 * Code below is the event when image rock is clicked
 */
    rock.addEventListener("click", function() {
    computerSelection = computerPlay();
    switch(computerSelection) {
        case "rock" :
            computerImageDisplayed.setAttribute("src", "images/rock.png");
            document.querySelector("#title").innerHTML = "No winner!";
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
            document.querySelector("#title").innerHTML = "You won! rock break cissor";
            break;
    }

    userImageDisplayed.setAttribute("src", "images/rock.png");

    checkResult();
    warning();
 
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
                document.querySelector("#title").innerHTML = "No winner!";
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
        warning();
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
                document.querySelector("#title").innerHTML = "No winner!";
                break;
        }

        userImageDisplayed.setAttribute("src", "images/cissor.png");

        checkResult();
        warning();
    });

    /**
 * Function will tracking result of both players
 */

 function checkResult() {
    let imageToSelect = document.querySelector("#imageToSelect");
    
    if(userResult == 5 || computerResult ==5) {
        imageToSelect.style.display = "none";
        document.querySelector("#warning").innerHTML = "Game over";
        if(userResult > computerResult){
            document.querySelector("#title").innerHTML = "Congratulations!!! You beat me!";
            document.querySelector("h2").innerHTML = "Click on the button below to another party";
            
            showButton();
        }
        else{
            document.querySelector("#title").innerHTML = "Sorry! You lose! I beat you";
            document.querySelector("h2").innerHTML = "Clik on the button below to another party";
            document.querySelector("#warning").innerHTML = "Game over";
            showButton();
        }
    }
}
