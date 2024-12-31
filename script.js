function getCompChoice(){
    let a=Math.floor(3*Math.random());
    if(a==2)    return "scissors";
    if(a==0)    return "rock";
    if(a==1)    return "paper";
}

//select buttons
// let rock= document.querySelector("#btn1")
// let paper= document.querySelector("#btn2")
// let scissors= document.querySelector("#btn3")

// let h=document.querySelector("btn");
// h.addEventListener("click", (event)=>{
//     return event.target.id
// })

let roundNumber=0

let h=document.querySelector("#btn");

h.addEventListener("click", (event)=>{
    if(event.target.tagName==="BUTTON"){
        humanChoice=event.target.id;
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

    if(compScore>humanScore&&compScore==5){
        console.log("Computer Wins!");
        humanScore=0;
        compScore=0;
        roundNumber=0;
    }  
    else if(compScore<humanScore&&humanScore==5){
        console.log("Human Wins!");
        humanScore=0;
        compScore=0;
        roundNumber=0;
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



// final output
