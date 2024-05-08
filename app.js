let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice =() =>{
  //rock paper scissors
  const options =["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random()*3);
  return options[randomIdx];
};

const playGame = (userChoice)=>{
    //console.log("user choice = ",userChoice);
    //generate computer choice  -> modular
    const compChoice = genCompChoice();
    //console.log("comp choice = ", compChoice);
    if(userChoice === compChoice){
     //draw game
     drawGame();
    }
    else{
      let userWin = true;
      if(userChoice === "rock"){
          // scissors or paper
          userWin = compChoice === "paper" ? false : true;
      }else if(userChoice === "paper"){
          //rock or scissors
          userWin = compChoice === "rock" ? true: false;
      }else{ // userchoice->scissors
          userWin = compChoice === "rock"? false : true;
      }
      showWin();
    }
  };
  const drawGame = ()=>{
    console.log("game was a draw!");
    msg.innerText = "Its a draw!"
    msg.style.backgroundColor ="purple";
 };


const showWin = (userWin,userChoice, compChoice) =>{
   if(userWin){ 
    userScore++;
    userScorepara.innerText = userScore;
    // console.log(`you Win! ${userChoice} beats ${compChoice}`);
    msg.innerText = `you Win!`;
    //  ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}else{ 
    compScore++;
    compScorepara.innerText = compScore;
    // console.log(`you lose! ${compChoice} beats ${userChoice}`);
    msg.innerText = `you lose!`;
    //  ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log(userChoice);
        //console.log("choice was clicked");
        playGame(userChoice);
    });
});
