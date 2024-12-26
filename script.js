function getCompChoice(){
    let a=Math.floor(3*Math.random());
    if(a==2)    return "scissors";
    if(a==0)    return "rock";
    if(a==1)    return "paper";
}

function getHumanChoice(){
    let a=prompt("What is your move? \n");
    return a.toLowerCase();
}

let humanScore=0
let compScore=0

function playRound(n){
    if(n==0)    return;

    let human=getHumanChoice();
    let comp=getCompChoice();

    console.log(`Comp move ${comp}\n`);
    

    check(human, comp);
    console.log(`Score: Comp-${compScore}   Human-${humanScore}`)

    playRound(n-1);
    return;
}

function check(human, comp){
    if(human=="rock"){
        if(comp=="scissors")    humanScore++;
        else if(comp=="paper")   compScore++;
    }
    else if(human=="paper"){
        if(comp=="scissors")    compScore++;
        else if(comp=="rock")    humanScore++;
    }
    else if(human=="scissors"){
        if(comp=="paper")   humanScore++;
        else if(comp=="rock")    compScore++;
    }
}

playRound(5);
if(compScore>humanScore)    console.log("Comp Wins!");
else    console.log("Human Wins");