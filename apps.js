//Accesing all the boxes of HTML by creating queryselectorall(".box")
let boxes = document.querySelectorAll(".box");
//Accesing reset button by creating queryselector("#reset-btn")
let resetBtn = document.querySelector("#reset-btn");
//Accesing New Game button by creating queryselector("#new-btn")
let newGameBtn = document.querySelector("#new-btn");
//Accesing message container by creating querySelector(".msg-container")
let msgContainer = document.querySelector(".msg-container");
//Accesimng message by creating querySelector("#msg")
let msg = document.querySelector("#msg");

let turnO = true; //playerX, palyerO

//creating Array for winpattern 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
//creating resetGame function to reset the game, it will play X if it was the turn of X and vice-versa.
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
//creating addEventlistener where we clicked the boxes there will be some action in our Game.
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) { //palyerO
            box.innerText = "O";
            turnO = false;
        
        } else { //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });

});
//creating disableBoxes function to diasble play after the winner.
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
//creating enableBoxes function, when we start the new game we will be able to play again
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
//creating showwinner function which will dispay congratulation, winner is X or O.
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
//creating checkwinner function to check the winner in the Game.
    const checkWinner = () => {
        for(let pattern of winPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
//if the pos1val, pos2val, pos3val is empty then we cannot check the winpattern.
            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }

    
    }

};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame); 


