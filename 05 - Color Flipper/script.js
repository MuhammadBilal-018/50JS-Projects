let generateButton = document.querySelector(".generate-button");
let colorCode = document.querySelector(".color-code");

let red;
let green;
let blue;
let redHex;
let greenHex;
let blueHex;

generateButton.addEventListener("click", ()=>{
   RandomColor();
   colorCode.innerHTML = ` Background Color: #${hexColor}`;
   document.body.style.backgroundColor = `#${hexColor}`;
})

function RandomColor(){
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        redHex = red.toString(16).padStart(2, '0');
        greenHex = green.toString(16).padStart(2, '0');
        blueHex = blue.toString(16).padStart(2, '0');  
        
        hexColor = redHex+greenHex+blueHex;
}