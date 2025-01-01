function getCompChoice(){
    let a=Math.floor(3*Math.random());
    if(a==2)    return "scissors";
    if(a==0)    return "rock";
    if(a==1)    return "paper";
}

let roundNumber=0

let h=document.querySelector("#btn");

h.addEventListener("click", (event)=>{
    let button=event.target.closest("button")
    if(button){
        let humanChoice=button.id;
        roundNumber++;
        playRound(humanChoice);
    }
})

//declare the scoring variables
let humanScore=0
let compScore=0

//function on how the round shall be played using recursion
function playRound(humanChoice){
    
    let compChoice=getCompChoice();

    console.log(`Round ${roundNumber}`);

    check(humanChoice, compChoice);
    
    console.log(`Computer: ${compScore}     Human:${humanScore}`)
    displayScore(`Computer: ${compScore}     Human:${humanScore}`)

    if(compScore>humanScore&&compScore==5){
        console.log("Computer Wins!");
        humanScore=0;
        compScore=0;
        roundNumber=0;
        displayWinner("Computer Wins!");
    }  
    else if(compScore<humanScore&&humanScore==5){
        console.log("Human Wins!");
        humanScore=0;
        compScore=0;
        roundNumber=0;
        displayWinner("Human Wins!");
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

//function to display stuff on the screen 
function displayScore(string){
    let score=document.querySelector("#score")
    score.innerText=string;
    let win=document.querySelector("#win")
    win.innerText="Game Begins!";
}

function displayWinner(string){
    let win=document.querySelector("#win")
    win.innerText=string;
}
