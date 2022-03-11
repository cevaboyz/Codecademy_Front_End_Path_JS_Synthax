//Rock-Paper-Scissors

const getUserChoice = (userInput) => {

    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput;
    }
    else {
        return ("Wrong Choice Kiddo! Please type rock, paper or scissors")
    }
}

const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    switch (randomNumber) {
        case 0: return "rock";
            break;
        case 1: return "paper";
            break;
        case 2: return "scissors";
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "This game is a tie!";
    }
    
    if(userChoice === "rock"){
        if (computerChoice === "paper"){

            return "Skynet Won";
        } else{
                return "Congratulations You Won!";
            }
    }

    if(userChoice === "paper"){
        if(computerChoice === "scissors"){
            return "Skynet Won";
        } else{
            return "Congratulations You Won!";
            }
    }
    
    
    if(userChoice === "scissors"){
        if(computerChoice === "rock"){
            return "Skynet Won";
            }else{

            return "Congratulations You Won!";
            }
    }

    if(userChoice === "bomb"){
        return "Congratulations You Won!"
    }
}




const playGame = ()=>{
    const userChoice = getUserChoice("paper")
    const computerChoice = getComputerChoice();
    console.log("You threw " + userChoice );
    console.log("The computer threw is " + computerChoice)

    console.log(determineWinner(userChoice, computerChoice))
}

playGame()
