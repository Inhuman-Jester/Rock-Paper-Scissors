function getCompChoice(){
    let a=Math.floor(3*Math.random());
    if(a==2)    return "scissors";
    if(a==0)    return "rock";
    if(a==1)    return "paper";
}

//select buttons
// let rock= document.querySelector("#btn1")

function getHumanChoice(){
    let choice=prompt("Enter you choice")
    return choice.toLowerCase()
}


//declare the scoring variables
let humanScore=0
let compScore=0

//function on how the round shall be played using recursion
function playRound(){
    let numOfRounds=0;
    while(humanScore!=5 && compScore!=5){
        let humanChoice=getHumanChoice();
        let compChoice=getCompChoice();
        numOfRounds++;

        check(humanChoice, compChoice);
        
        console.log(`Computer: ${compScore}     Human:${humanScore}`)
    }
}

//function which checks who wins the point
function check(humanChoice, compChoice){
    if(humanChoice=="rock"){
        if(compChoice=="scissors"){
            humanScore++;
            console.log("Human Wins this round")
        }    
        else if(compChoice=="paper"){
            compScore++;
            console.log("Computer wins this round")
        }   
    }
    else if(humanChoice=="paper"){
        if(compChoice=="scissors"){
            compScore++;
            console.log("Computer wins this round")
        }    
        else if(compChoice=="rock"){
            console.log("Human Wins this round")
            humanScore++;
        }    
    }
    else if(humanChoice=="scissors"){
        if(compChoice=="paper"){
            console.log("Human Wins this round")
            humanScore++;
        }
        else if(compChoice=="rock"){
            compScore++;
            console.log("Computer wins this round")
        }
    }
    return;
}

//triggering the funcction
playRound();

// final output
if(compScore>humanScore)    console.log("Computer Wins!");
else    console.log("Human Wins!");