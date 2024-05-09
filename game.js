let userScore=0;
let aiScore=0;
const userScorePara=document.querySelector("#user-score");
const aiScorePara=document.querySelector("#ai-score");
const msge=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    let chooseOption=Math.floor(Math.random()*3);
    return options[chooseOption];
}
const drawGame=()=>{
    msge.innerHTML="Game was Draw Play Again!";
    msge.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,aiChoice)=>{
    if(userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText=userScore;
        msge.innerHTML="You Win";
        msge.style.backgroundColor="green";
        msge.innerHTML=`You Win Your ${userChoice} beats your ${aiChoice}`;
    }
    else{
        aiScore++;
        aiScorePara.innerText=aiScore;
        console.log("You Lose");
        msge.innerHTML=`You Lose Ai choice ${aiChoice} beats your ${userChoice}`;
        msge.style.backgroundColor="red";
    }
}

const playGame=(userChoice )=>{
    let userWin=true;
    console.log(userChoice);
    const aiChoice=genComputerChoice();
    console.log(aiChoice);

    if(userChoice===aiChoice){
        drawGame();
    }
    else{
        
        if(userChoice==="rock"){
            userWin=aiChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin=aiChoice==="scissors" ? false:true;
        }
        else if(userChoice==="scissors"){
            userWin=aiChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,aiChoice);
    }
    
}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        console.log(`${userChoice} was clicked`);
        playGame(userChoice);
    });
});