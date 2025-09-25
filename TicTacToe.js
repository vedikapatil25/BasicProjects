let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let winmsg = document.querySelector("#win-msg");
let newgame = document.querySelector("#newgame");
let resetBtn = document.querySelector("#reset");
let draw = document.querySelector(".draw");
const winPatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8]
];
let turn0 = true; //player0 playerX
let count = 0;
const disablebox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enablebox = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turn0 = true;
    count = 0;
    enablebox();
    winner.classList.add("hide");
};
const printWinner = (win) => {
    winmsg.innerText = `congratulations winner is ${win}`;
    winner.classList.remove("hide");
    disablebox();
};

resetBtn.addEventListener("click" , resetGame);
newgame.addEventListener("click" , resetGame);
const checkWinner =() => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                printWinner(pos1Val);
                return true;
            }
        }
    }
};

boxes.forEach((box) => {
    
    box.addEventListener("click" , () => {
        if(turn0) {
            box.innerText = "0";
            box.style.color =" rgba(99, 246, 45, 1)";
           turn0 = false;
        }
        else {
            box.innerText = "X";
             box.style.color ="yellow" ;
             box.style.fontSize =" 4.5rem";

            turn0 = true;
        }
        box.disabled = true;    
        count++;
        let isWinner =checkWinner();    
        if(count === 9 && !isWinner){
            draw.innerText = "Game is Draw";
            newgame.addEventListener("click" , resetGame);

            draw.classList.remove("hide");
        }
    });
   
});





