const gameInfo = document.querySelector(".game-info");
const boxes = document.querySelectorAll(".box");
const gameButton = document.querySelector(".btn");

let currentPlayer;
let count=0;

const winningPosition = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function initGame(){
        currentPlayer = "X";
        // count=0;
        gameButton.classList.remove("active");
        gameInfo.innerText = `Current Player - ${currentPlayer}`;
        boxes.forEach((box,index)=>{
            box.classList.remove("win");
            box.innerText="";
            boxes[index].style.pointerEvents = "all";
        })
    }

    initGame();


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(currentPlayer === "X"){
            box.innerText = "X";
            currentPlayer = "O";
        }
        else{
            box.innerText = "O";
            currentPlayer = "X";
        }
        
        gameInfo.innerText = `Current Player - ${currentPlayer}`;
        box.style.pointerEvents = "none";
        checkWinner();
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }

        })
})

function gameDraw(){
    gameInfo.innerText = `Game was a Draw.`;
    console.log("Game Draw!")
  }
  
function checkWinner(){
    let winner = "";
    winningPosition.forEach((pattern) => {
        let positionValue1 = boxes[pattern[0]].innerText;
        let positionValue2 = boxes[pattern[1]].innerText;
        let positionValue3 = boxes[pattern[2]].innerText;
        
       if(
        (positionValue1 !== "" || positionValue2 !== "" || positionValue3 !== "")
                         && 
        (positionValue1 === positionValue2)
                         && 
        (positionValue2 === positionValue3)
        ){
            if(positionValue1 === "X"){
                winner = "X";
            }
            else{
                winner = "O";
            }
            boxes[pattern[0]].classList.add("win");
            boxes[pattern[1]].classList.add("win");
            boxes[pattern[2]].classList.add("win");
            gameInfo.innerText = `Congraulation "${winner}" You are Winner!`;

            boxes.forEach((box)=>{
                box.style.pointerEvents = "none";
            })
            gameButton.classList.add("active");          
        }        
    })    
}

gameButton.addEventListener("click", initGame)
