const counterNumber = document.querySelector(".updated-number");
const decreaseNumber = document.querySelector(".decrease-number");
const resetNumber = document.querySelector(".reset-number");
const increaseNumber = document.querySelector(".increase-number");


let numberCounter = 0;
decreaseNumber.addEventListener("click", ()=>{
    numberCounter--;
    counterNumber.innerHTML = numberCounter;
})

resetNumber.addEventListener("click", ()=>{
    numberCounter=0;
    counterNumber.innerHTML = numberCounter;
})

increaseNumber.addEventListener("click", ()=>{
    counterNumber.innerHTML = numberCounter;
    numberCounter++;
})