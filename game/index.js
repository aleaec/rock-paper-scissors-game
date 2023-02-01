const playertxt=document.querySelector("#playertxt");
const computertxt=document.querySelector("#computertxt");
const resulttxt=document.querySelector("#resulttxt");
const choicebtt=document.querySelectorAll(".choicebtt");
let player;
let computer;
let result;

choicebtt.forEach(button=> button.addEventListener("click",()=>{

    player=button.textContent;
    computerTurn();
    playertxt.textContent=`Player: ${player}`;
    computertxt.textContent=`Computer: ${computer}`;
    resulttxt.textContent= checkWinner();
    
}));

function computerTurn(){

    const randNum=Math.floor(Math.random() * 3) +1;
    switch(randNum){
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player==computer){
        return "You're even! Try again!";
    }
    else if(computer=="ROCK"){
        return (player=="PAPER")? "You WIN!" : "You LOSE!"  
    }
    else if(computer=="PAPER"){
        return (player=="SCISSORS") ? "You WIN!" : "You LOSE!"
    }
    else if(computer=="SCISSORS"){
        return (player=="ROCK") ? "You WIN!" : "You LOSE!"
    }
}

