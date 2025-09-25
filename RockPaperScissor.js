let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let you = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;
showWinner = (userChoice , compChoice) => {
  if(userChoice === compChoice) {
    msg.innerText = "Game was draw please try again.";
    msg.style.backgroundColor = "black";

  }
  else{
    if((userChoice === "rock" && compChoice === "scissor") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissor" && compChoice === "paper")){
      msg.innerText = "You Win!!";
      msg.style.backgroundColor = "green";
      userScore++;
      you.innerText = userScore;
    }
    else if((userChoice === "rock" && compChoice === "paper") || (userChoice === "paper" && compChoice === "scissor") || (userChoice === "scissor" && compChoice === "rock")){
      msg.innerText = "you lost";
      msg.style.backgroundColor = "red";
      compScore++;
      comp.innerText = compScore;
    }
  }
};
genCompChoice = () => {
    let options = ["rock" , "paper" , "scissor"];
    let optionidx = Math.floor(Math.random() * 3);
    return options[optionidx];
    
};
printchoice = (userChoice) => {
    let compChoice = genCompChoice();
   console.log(compChoice);
   showWinner(userChoice , compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click" ,() =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        printchoice(userChoice);
    });

});
