let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, aI, targetNumber) => {
    let humanDifference = Math.abs(human - targetNumber);
    let aIDifference = Math.abs(aI - targetNumber);

    if(humanDifference <= aIDifference){
        return true;
    } else{
        return false;
    }
}

const updateScore = (result) => {
    if(result === 'human'){
        humanScore++
    }else{
        computerScore++
    }
}

const advanceRound = () => {
        currentRoundNumber++
    }


